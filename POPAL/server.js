//익스프레스
var express = require('express')
var app = express()
const http = require('http').createServer(app);
const PORT = (process.env.PORT || 3100);

//싸켓아이오
const io = require('socket.io')(http);
var clients = [];
//템플릿 엔진
var ejs = require("ejs");
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//파일시스템
//var fs = require('fs');

//파서
var expressSession = require('express-session');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//DB 연결
const mysql = require('mysql'); //모듈연결
const popal_DB = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'popal',
    multipleStatements: true
};
var connection2 = mysql.createConnection(popal_DB); // DB 커넥션 생성
connection2.connect();   // DB 접속


//express 정적파일 위치
app.use(express.static('Resource'));
//상호 통신을 위한 파서의 선언
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

// 세션세팅
app.use(
    expressSession({
        secret: "my key",
        resave: true,
        saveUninitialized: true,
    })
);

//본문
app.get('/', (request, response) => {
    response.redirect('/PoPalEnter');
});

//게임 로그인
app.get("/PoPalEnter", (request, response) => {
    if (request.session.user) {
        // 세션에 유저가 존재한다면
        response.redirect("/PoPal");
    } else {
        response.redirect("/PoPalLogin");
    }
});
app.get('/PoPalLogin', (request, response) => {
    response.redirect('\popalLogin.html');
});
app.post('/PoPalLoginProcess', (request, response) => {

    const paramID = request.body.nickname;
    const pw = request.body.password;

    var sql = `select * from popal_user where nickname = ?`;
    connection2.query(sql, [paramID], function (err, results) {
        if (err) {
            console.log(err);
        } else {
            if (!results.length) {
                response.render("errAlert", { 'errMessage': "존재하지 않는 회원 이름 입니다."});
            } else if(results[0].is_banned){
                response.render("errAlert", {'errMessage': `해당 아이디는 이용 정지 상태 입니다. \r\n \n\n\n 사유: `+results[0].ban_reason });
            } else {
                if (pw == results[0].password) {
                    if (request.session.user) {
                        // 세션에 유저가 존재한다면
                        response.render("errAlert", { 'errMessage': "이미 로그인 된 상태에서 중복 로그인을 시도하였습니다." });
                    } else {
                        console.log("세션을 생성합니다.");
                        request.session.user = {
                            id: paramID,
                            pw: pw,
                            is_admin: results[0].is_admin,
                            authorized: true,
                        };
                        response.redirect("/PoPal");
                    }
                } else {
                    response.render("errAlert", { 'errMessage': "식별번호가 틀립니다." });
                }
            }
        }
    });
});
app.get('/PoPalLogOut', (request, response) => {
    if (request.session.user) {
        request.session.destroy((err) => {
            if (err) {
                response.render("errAlert", { 'errMessage': "로그인 세션을 삭제하는 과정에서 오류가 발생했습니다." });
                return;
            }
            response.redirect("/PoPalLogin");
        });
    } else {
        response.render("errAlert", { 'errMessage': "로그인 상태가 아닙니다." });
    }
});
app.get('/PoPal', (request, response) => {
    if (request.session.user) {
        // 세션에 유저가 존재한다면
        response.render("popalMain", { nick_name: request.session.user.id, is_admin: request.session.user.is_admin });
    } else {
        response.render("errAlert", { 'errMessage': "비정상 접근 입니다." });
    }
});
app.post('/adminPage', (request, response) => {
    response.render("adminPage",);
});

//게임 글로벌 변수
var game_name = "골드샤이어 여관"
var game_faction_name = "팩션 - 시작점"
var game_faction_scenario = "여행을 시작하기에 앞서 만나게 된 파트너들과 통성명을 나눕니다..."
var game_board_background = "https://i.pinimg.com/550x/53/18/4e/53184e555e7b02eeaaddca8f961baf81.jpg"

//소켓
io.on('connection', (socket) => {

    //로그인
    socket.on('login', data => {
        
        // socket에 클라이언트 정보를 저장
        socket.name = data.name;
        console.log(socket.name + "의 서버 입장");

        var clientInfo = new Object();
        clientInfo.name = socket.name;
        clientInfo.id = socket.id;
        clientInfo.image = "../png/unknown_user_icon.png"
        clientInfo.x = 0;
        clientInfo.y = 0;
        clients.push(clientInfo);

        //쿼리에 저장된 개인 정보 불러오기
        var sql = `select * from popal_user where nickname = ?`;
        connection2.query(sql, [socket.name], function (err, results) {
            if (err) {
                console.log(err);
            } else {
                var load_profile_image = "../png/unknown_user_icon.png";
                var load_profile_message = "기본 상태 메세지";
                if (results[0].profile_image != null) {load_profile_image = results[0].profile_image}
                if (results[0].profile_message != null) {load_profile_message = results[0].profile_message}
                //개인페이지에 정보 전달
                io.to(socket.id).emit('game_board_render', {
                    socket_name: socket.name,
                    profile_image: load_profile_image,
                    profile_message: load_profile_message,
                    game_name: game_name,
                    admin_user: results[0].is_admin
                });
                //서버 클라정보에 값전달
                clients[clients.length-1].image = load_profile_image;

                //게임 정보 전달
                io.emit('response_scenario', { name: game_faction_name, scenario: game_faction_scenario });
                //게임판에 게임말 생성해주기
                io.emit('response_board_clear',game_board_background)
                for (var i = 0; i < clients.length; i++) {
                    io.emit('response_create_piece', { name: clients[i].name, image: clients[i].image, x: clients[i].x, y: clients[i].y});
                }
            }
        });
        
        //전체에 입장 메세지
        var str = now_time() + socket.name + "님이 서버에 접속하였습니다.";
        var sql = `INSERT INTO chat_log (time, chat_type, chat_user, chat_contain) VALUES(?, ?, ?, ?)`;
        connection2.query(sql, [now_time(), "[접속]", socket.name, "[---]"], function (err, results) {
            if (err) {
                console.log(err);
            }
        });
        io.to(socket.id).emit('response_help_message', "'@help'로 사용 가능한 기능를 확인 할 수 있습니다.");
        //접속자 리스트 보여주기
        io.emit('response_important_message', str);
        io.emit('user_list_destroy',);
        for (var i = 0; i < clients.length; i++) {
            io.emit('user_list_response', { name : clients[i].name, number : i });
        }
    });

    //유저검색
    socket.on('request_user_info', (msg) => {
        var str = undefined;
        for (var i = 0; i < clients.length; i++) {
            if (msg == clients[i].name) {
                str = clients[i].name;
            }
        } 
        if (str != undefined) {
            //쿼리에 저장된 개인 정보 불러오기
            var sql = `select * from popal_user where nickname = ?`;
            connection2.query(sql, [str], function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    var load_profile_image = "../png/unknown_user_icon.png";
                    var load_profile_message = "기본 상태 메세지";
                    if (results[0].profile_image != null) { load_profile_image = results[0].profile_image }
                    if (results[0].profile_message != null) { load_profile_message = results[0].profile_message }
                    //행동로그에서 당했던, 행했던 로그 가져오기
                    var sql = `select * from activity_log where activity_actor = ? or activity_target = ?`;
                    connection2.query(sql, [str, str], function (err, results2) {
                        if (err) {
                            console.log(err);
                        } else {
                            //개인페이지에 정보 전달
                            io.to(socket.id).emit('response_user_info', {
                                socket_name: str,
                                profile_image: load_profile_image,
                                profile_message: load_profile_message,
                                log: results2
                            });
                        }
                    });
                    
                }
            });
        } else {
            io.to(socket.id).emit('response_user_info', {
                socket_name: undefined,
                profile_image: undefined,
                profile_message: undefined
            });
        }
    });

    //프로필 업데이트
    socket.on('update_user_profile_message', (msg) => {
        
        var sql = `UPDATE popal_user SET profile_message = ? WHERE nickname = ?`;
        connection2.query(sql, [msg.contain, msg.target_name], function (err, results) {
            if (err) {
                console.log(err);
            }
        });
    });
    socket.on('update_user_profile_image', (msg) => {
        var sql = `UPDATE popal_user SET profile_image = ? WHERE nickname = ?`;
        connection2.query(sql, [msg.contain, msg.target_name], function (err, results) {
            if (err) {
                console.log(err);
            }
        });
    });

    //게임판 좌표 이동
    socket.on('request_player_move', (msg) => {
        var str = undefined;
        for (var i = 0; i < clients.length; i++) {
            if (msg.name == clients[i].name) {
                clients[i].x = msg.x;
                clients[i].y = msg.y;
                str = msg.name;
            }
        }
        if (str != undefined) {
            io.emit('response_player_move', msg);
        }
    });

    //게임 배경 변경
    socket.on('request_game_board_background_change', (msg) => {
        game_board_background = msg;
        io.emit('response_board_clear',game_board_background)
        for (var i = 0; i < clients.length; i++) {
            io.emit('response_create_piece', { name: clients[i].name, image: clients[i].image, x: clients[i].x, y: clients[i].y});
        }
    });
    //게임 이름 변경
    socket.on('request_game_name_change', (msg) => {
        io.emit('response_game_name_change', msg);
        game_name = msg;
    });
    //게임 시나리오 변경
    socket.on('request_scenario', (msg) => {
        game_faction_name = msg.name;
        game_faction_scenario = msg.scenario;
        io.emit('response_scenario', { name: game_faction_name, scenario: game_faction_scenario });
    });

    //유저신고
    socket.on('request_user_report', (msg) => {
        var sql = `INSERT INTO report_log (time, reporter, report_target, reason) VALUES(?, ?, ?, ?)`;
        connection2.query(sql, [now_time(), msg.reporter_name, msg.target_name, msg.reason], function (err, results) {
            if (err) {
                console.log(err);
            }
        });
        io.emit('response_important_message', '신고가 완료 되었습니다.');
    });

    //메세지
    socket.on('request_help_message', (msg) => {
        io.to(socket.id).emit('response_help_message', msg);
    });
    socket.on('request_nomal_message', (msg) => {
        var str = now_time() + "[일반] " + socket.name + ": " + msg;
        var sql = `INSERT INTO chat_log (time, chat_type, chat_user, chat_contain) VALUES(?, ?, ?, ?)`;
        connection2.query(sql, [now_time(), "[일반]", socket.name, msg], function (err, results) {
            if (err) {
                console.log(err);
            }
        });
        io.emit('response_message', {log: str, box: msg, name: socket.name});
    });
    socket.on('request_activity_message', (msg) => {
        var str = now_time() + "[행동] " + socket.name + "님이 " + msg.target + "에게 " + msg.contain + "을(를) 합니다.";
        var sql = `INSERT INTO activity_log (time, activity_type, activity_actor, activity_target, activity_contain) VALUES(?, ?, ?, ?, ?)`;
        connection2.query(sql, [now_time(), "[행동]", socket.name, msg.target, msg.contain], function (err, results) {
            if (err) {
                console.log(err);
            }
        });
        var actor_socket = undefined;
        var target_socket = undefined;
        for (var i = 0; i < clients.length; i++) {
            if (socket.name == clients[i].name) {
                actor_socket = clients[i].id;
            }
            if (msg.target == clients[i].name) {
                target_socket = clients[i].id;
            }
        }
        if (actor_socket != undefined) {
            io.to(actor_socket).emit('response_activity_log', msg.target + "에게 " + msg.contain + "을(를) 했다.");
        }
        if (target_socket != undefined) {
            io.to(target_socket).emit('response_activity_log', socket.name + "에게 " + msg.contain + "을(를) 당했다.");
        }
        
        io.emit('response_activity_message', str);
    });
    socket.on('request_dice_message', (msg) => {
        var str = now_time() + "[주사위] " + socket.name + "님이 " + msg;
        var sql = `INSERT INTO activity_log (time, activity_type, activity_actor, activity_target, activity_contain) VALUES(?, ?, ?, ?, ?)`;
        connection2.query(sql, [now_time(), "[주사위]", socket.name, "self", msg], function (err, results) {
            if (err) {
                console.log(err);
            }
        });
        io.emit('response_important_message', str);
    });
    socket.on('request_profile_message', (msg) => {
        var str = "[프로필] " + socket.name + "님의 프로필 변경 '" + msg.old_profile + "' -> '" + msg.new_profile+"'";
        var sql = `INSERT INTO activity_log (time, activity_type, activity_actor, activity_target, activity_contain) VALUES(?, ?, ?, ?, ?)`;
        connection2.query(sql, [now_time(), "[프로필]", socket.name, "self",str], function (err, results) {
            if (err) {
                console.log(err);
            }
        });
        io.emit('response_change_message', str);
    });
    socket.on('request_profile_image_message', (msg) => {
        var str = "[프로필] " + socket.name + "님이 프로필 이미지를 변경 하였습니다.";
        var sql = `INSERT INTO activity_log (time, activity_type, activity_actor, activity_target, activity_contain) VALUES(?, ?, ?, ?, ?)`;
        connection2.query(sql, [now_time(), "[프로필]", socket.name, "self",str], function (err, results) {
            if (err) {
                console.log(err);
            }
        });
        io.emit('response_change_message', str);
    });

    //어드민
    socket.on('request_important_message', (msg) => {
        var str = "[공지] " + msg;
        var sql = `INSERT INTO chat_log (time, chat_type, chat_user, chat_contain) VALUES(?, ?, ?, ?)`;
        connection2.query(sql, [now_time(), "[공지]", "Admin", msg], function (err, results) {
            if (err) {
                console.log(err);
            }
        });
        io.emit('response_everynotice_message', str);
    });
    //로그부르기
    socket.on('request_chat_log', (msg) => {
        //쿼리에 저장된 개인 정보 불러오기
        var sql = `select * from chat_log`;
        connection2.query(sql, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                if (results.length) {
                    io.to(socket.id).emit('response_chat_log_message_box_clear', );
                    for (var i = 0; i < results.length; i++) {
                        var str = results[i].idchat_log + "-" + results[i].time + " " + results[i].chat_type + " " + results[i].chat_user + ": " + results[i].chat_contain;
                        io.to(socket.id).emit('response_chat_log_message',str);
                    }
                }
            }
        });
    });
    socket.on('request_name_search', (msg) => {
        //쿼리에 저장된 개인 정보 불러오기
        var sql = `select * from chat_log where chat_user = ?`;
        connection2.query(sql,[msg.search_name], function (err, results) {
            if (err) {
                console.log(err);
            } else {
                if (results.length) {
                    io.to(socket.id).emit('response_chat_log_message_box_clear', );
                    for (var i = 0; i < results.length; i++) {
                        var str = results[i].idchat_log + "-" + results[i].time + " " + results[i].chat_type + " " + results[i].chat_user + ": " + results[i].chat_contain;
                        io.to(socket.id).emit('response_chat_log_message',str);
                    }
                }
            }
        });
    });
    socket.on('request_activity_log', (msg) => {
        //쿼리에 저장된 개인 정보 불러오기
        var sql = `select * from activity_log`;
        connection2.query(sql, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                if (results.length) {
                    io.to(socket.id).emit('response_activity_log_message_box_clear',);
                    for (var i = 0; i < results.length; i++) {
                        var str = results[i].idactivity_log + "-" + results[i].time + " <p style='color: sky'>" + results[i].activity_type + " </p><p style='color: red'>" + results[i].activity_actor + " (이)가</p> <p style='color: blue'>" + results[i].activity_target + "에게</p> <b>" + results[i].activity_contain + "</b>";
                        io.to(socket.id).emit('response_activity_log_message', str);
                    }
                }
            }
        });
    });
    socket.on('request_report_log', (msg) => {
        //쿼리에 저장된 개인 정보 불러오기
        var sql = `select * from report_log`;
        connection2.query(sql, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                if (results.length) {
                    io.to(socket.id).emit('response_report_log_message_box_clear',);
                    for (var i = 0; i < results.length; i++) {
                        var str = results[i].time + "<p><b>신고자:" + results[i].reporter+ "</b></p> <p style='color: red'>대상:" + results[i].report_target + "</p> <p style='color:blue'>사유: " + results[i].reason+"</p>";
                        io.to(socket.id).emit('response_report_log_message', str);
                    }
                }
            }
        });
    });
    //로그 삭제
    socket.on('request_chat_log_destroy', (msg) => {
        var sql = `TRUNCATE chat_log`;
        connection2.query(sql, function (err, results) {
            if (err) {
                console.log(err);
            }
        });
    });
    socket.on('request_activity_log_destroy', (msg) => {
        var sql = `TRUNCATE activity_log`;
        connection2.query(sql, function (err, results) {
            if (err) {
                console.log(err);
            }
        });
    });
    socket.on('request_report_log_destroy', (msg) => {
        var sql = `TRUNCATE report_log`;
        connection2.query(sql, function (err, results) {
            if (err) {
                console.log(err);
            }
        });
    });
    //벤
    socket.on('request_user_ban', (msg) => {

        var sql = `select * from popal_user where nickname = ?`;
        connection2.query(sql, [msg.ban_name], function (err, results) {
            if (err) {
                console.log(err);
            } else {
                if (!results.length) {
                    io.emit('response_alert_message', "그런 이름의 유저는 없습니다.");
                } else if (results[0].is_banned == 1) {
                    io.emit('response_alert_message', "이미 이용 정지 상태인 유저 입니다.");
                } else {
                    //쿼리에 저장된 개인 정보 불러오기
                    var sql = `update popal_user set is_banned = ?, ban_reason = ? where nickname = ?`;
                    connection2.query(sql, [true, msg.ban_reason, msg.ban_name], function (err, results) {
                        if (err) {
                            console.log(err);

                        } else {
                            io.emit('response_important_message', msg.ban_name + "는 BAN 되었습니다. 사유: " + msg.ban_reason);
                        }
                    });
                }
            }
        });
    });
    socket.on('request_user_pardon', (msg) => {

        var sql = `select * from popal_user where nickname = ?`;
        connection2.query(sql, [msg.ban_name], function (err, results) {
            if (err) {
                console.log(err);
            } else {
                if (!results.length) {
                    io.emit('response_alert_message', "그런 이름의 유저는 없습니다.");
                } else if (results[0].is_banned == 0) {
                    io.emit('response_alert_message', "이용 정지 상태가 아닌 유저 입니다.");
                } else {
                    //쿼리에 저장된 개인 정보 불러오기
                    var sql = `update popal_user set is_banned = ?, ban_reason = ? where nickname = ?`;
                    connection2.query(sql, [false, "해제", msg.ban_name], function (err, results) {
                        if (err) {
                            console.log(err);

                        } else {
                            io.emit('response_important_message', msg.ban_name + "의 BAN이 해제되었습니다.");
                        }
                    });
                }
            }
        });
    });

    //귓속말
    socket.on('request_private_message', (msg) => {
        var str = undefined;
        for (var i = 0; i < clients.length; i++) {
            if (msg.private_message_target == clients[i].name) {
                str = clients[i].name;
                socket_id = clients[i].id;
            }
        }
        if (str != undefined) {
            io.to(socket_id).emit('response_change_message', "서버로부터의 귓속말: " + msg.private_message_contain);
        } else {
            io.to(socket.id).emit('response_alert_message', "해당 유저가 존재하지 않습니다.");
        }
    });

    //연결끊김
    socket.on('disconnect', async () => {
        if (socket.name != undefined) { 
            //퇴장메세지
            var sql = `INSERT INTO chat_log (time, chat_type, chat_user, chat_contain) VALUES(?, ?, ?, ?)`;
            connection2.query(sql, [now_time(), "[퇴장]", socket.name, '[---]'], function (err, results) {
                if (err) {
                    console.log(err);
                }
            });
            io.emit('response_message', now_time() + socket.name + "님이 서버에서 나갔습니다.");

            //클라이언트 목록에서 삭제
            for (var i = 0; i < clients.length; i++) {
                if (socket.name == clients[i].name) {
                    clients.splice(i, 1);
                    break;
                }
            }
            //유저 리스트에서 삭제
            io.emit('user_list_destroy',);
            for (var i = 0; i < clients.length; i++) {
                io.emit('user_list_response', { name: clients[i].name, number: i });
            }
            //게임판에 게임말 삭제
            io.emit('response_board_clear',game_board_background)
            for (var i = 0; i < clients.length; i++) {
                io.emit('response_create_piece', { name: clients[i].name, image: clients[i].image, x: clients[i].x, y: clients[i].y });
            }
        }
    });
});

// TEST CODE GOES HERE
(async function () {
})();

function now_time() {
    var today = new Date();
    var hours = today.getHours(); // 시
    var minutes = today.getMinutes();  // 분
    return "[" + hours + ":" + minutes + "] ";
}

http.listen(PORT, () => {
    console.log('Connected at ' + PORT);
});