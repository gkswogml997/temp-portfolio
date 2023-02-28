//익스프레스
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5500;

//파서 선언
var bodyParser = require('body-parser');
var expressSession = require('express-session');
//파서 사용
{
    app.use(bodyParser.json());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    // 세션세팅
    app.use(
        expressSession({
            secret: "my key",
            resave: true,
            saveUninitialized: true,
        })
    );
}


//DB 연결
{
    const mysql = require('mysql');  // mysql 모듈 로드
    const guestBook_DB = {  // mysql 접속 설정
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'guestbook_db',
        multipleStatements: true
    };
    var connection = mysql.createConnection(guestBook_DB); // DB 커넥션 생성
    connection.connect();   // DB 접속

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
}

//express 정적파일 위치
app.use( express.static( path.join(__dirname, 'clients/build') ) );

//express 통신
app.post('/signupwrite', (request, response) => {
    var body = request.body;
    //중복체크
    var sql = `select EXISTS(select * from popal_user where nickname = ? limit 1) as success;`;
    connection2.query(sql, [body.nickname], function (err, results) {
        if (err) {
            console.log(err);
        } else {
            if (results[0].success == 1) {
                response.redirect("/ErrPage/이미 존재하는 아이디 입니다.")
            } else {
                //식별번호와 식별번호 확인 체크
                if (body.password == body.password_again) {
                    //회원가입
                    var sql = `INSERT INTO popal_user (nickname, password) VALUES(?, ?)`;
                    connection2.query(sql, [ body.nickname, body.password], function (err, results) {
                        if (err) {
                            console.log(err);
                        } else {
                            response.redirect("/SignUpSuccessPage")
                        }
                    });
                } else {
                    response.redirect("/ErrPage/식별 번호와 식별 번호 확인이 일치 하지 않습니다.")
                }
            }
        }
    });
});

app.post('/boardWrite', (request, response) => {
    var body = request.body;
    var sql = `INSERT INTO post_data_table(post_name, post_writer, post_contain, post_password, wirted_date) VALUES(?, ?, ?, ?, NOW())`;
    connection.query(sql,[body.post_name, body.post_writer, body.post_contain, body.post_password], function (err, results) {
        if (err){console.log(err);}
        else{
            response.redirect("/board")
        }
    });
});

app.post('/boardDelete/:page', (request, response) => {
    var body = request.body;
    var sql = `DELETE FROM post_data_table WHERE post_id = ? and post_password = ?`;
    connection.query(sql,[request.params.page, body.post_password], function (err, results) {
        if (err){console.log(err);}
        else{
            if (!results.affectedRows) {response.redirect("/ErrPage/비밀번호가 일치 하지 않습니다.")}
            else {
                response.redirect("/board")
            }
        }
    });
});

app.post('/boardRewrite/:page', (request, response) => {
    var body = request.body;
    var sql = `Update post_data_table SET post_name = ?, post_contain = ? WHERE post_id = ? and post_password = ?`;
    connection.query(sql,[body.post_name, body.post_contain, request.params.page, body.post_password], function (err, results) {
        if (err){console.log(err);}
        else{
            if(!results.affectedRows){response.redirect("/ErrPage/비밀번호가 일치 하지 않습니다.")}
            else{response.redirect("/board");}
        }
    });
});

app.get("/board/getList", (req, res) => {
    var sql = "SELECT *FROM post_data_table;";
    connection.query(sql, function (err, results) {
        if (err){console.log(err);}
        else{
            res.json(results);
        }
    });
});

app.get("/board/getListPage/:page", (req, res) => {
    var sql = "SELECT *FROM post_data_table WHERE post_id = ?;";
    connection.query(sql, [req.params.page], function (err, results) {
        if (err){console.log(err);}
        else{
            res.json(results);
        }
    });
});

//랜더
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'clients/build/index.html'), err => {if (err) {console.log(err);}} );
    
});

//포트 리스닝
app.listen(port, () => {
    console.log('listen on port:' + port);
});
