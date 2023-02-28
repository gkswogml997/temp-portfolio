import react from "react";
import Axios from "axios";
import {Link} from "react-router-dom"
import {Table, Button} from "react-bootstrap";

class BoardListLine extends react.Component{
    render(){

        const linkURL = "/board/post/"+this.props.post_number;
        return(
            <tr>
                <td>{this.props.post_number}</td>
                <td><Link to={linkURL} style={{color: "black"}}>{this.props.post_name}</Link></td>
                <td>{this.props.post_writer}</td>
                <td>{this.props.writed_date}</td>
            </tr>
        )
    }
}

class BoardFactory extends react.Component{

    //콜백에서 자유로운 스테이트 변수
    state = {
        boardList: [],
    };

    //콜백으로 /getList에서 서버랑 통신 후 데이터 받아와서 스테이트에 삽입
    getList = () => {
        Axios.get("http://localhost:5500/board/getList", {})
            .then((res) => {
                console.log(res.data)
                this.setState({boardList : res.data});
            })
            .catch((err) => {
                console.log(err);
            });
    };
    //클래스가 호출된 직후 한번 호출 * 초기화 작업에 사용됨
    componentDidMount = () =>{
        this.getList();
    }
    render(){
        const boardData = this.state.boardList;
        return(
            <Table striped style={{textAlign: "center"}}>
                    <thead>
                        <tr>
                            <th style={{width: "5%"}}>번호</th>
                            <th style={{width: "60%"}}>제목</th>
                            <th style={{width: "15%"}}>작성자</th>
                            <th style={{width: "20%"}}>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            boardData.reverse().map((dataSet) => (
                                <BoardListLine 
                                    key={dataSet.post_id}
                                    post_number={dataSet.post_id} 
                                    post_name={dataSet.post_name} 
                                    post_writer={dataSet.post_writer} 
                                    writed_date={dataSet.wirted_date}
                                />)
                            )
                        }  
                    </tbody>
            </Table>
        );
    }
}

class BoardList extends react.Component {
    render() {
        return (
            <div align="center">
                <div style={{width: "80%"}} align="right">
                    <br/>
                    <BoardFactory/>
                    <div style={{}}>
                        <Link to="/Board/postWrite"><Button variant="info">글쓰기</Button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardList;