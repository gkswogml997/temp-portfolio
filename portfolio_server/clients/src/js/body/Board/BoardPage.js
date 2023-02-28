import react, { useEffect, useState } from "react";
import Axios from "axios";
import {Link, useParams} from "react-router-dom"
import {Container,Row,Col, Button} from "react-bootstrap";

//페이지 모양 잡아주기
class PageForm extends react.Component{
    render(){
        return(
            <Container style={{textAlign: "left"}}>
            <br/>
                <Row>
                    <Col md="10"><p style={{fontSize: "18pt", fontWeight: "900"}}>{this.props.post_name}</p> </Col>
                </Row>
                <Row>
                    <Col md="2"><p style={{fontSize: "12pt", fontWeight: "900"}}>{this.props.post_writer}</p> </Col>
                    <Col md="10"><p style={{fontSize: "10pt", fontWeight: "400"}}>{this.props.wirted_date}</p></Col>
                </Row>
                <br/>
                <Row>
                    <Col><p>{this.props.post_contain}</p></Col>
                </Row>
                <br/>
            </Container>
        );
    };
}

//게시글 삭제 클래스
class PostDeleteForm extends react.Component{
    render(){
        return(
            <form style={{width: "30%", anlign: "center"}} action={'/boardDelete/'+this.props.page} method='post'>
                <p style={{fontSize: "18pt", fontWeight: "900", fontFamily: "굴림"}}>비밀번호</p>
                <input type="PASSWORD" className="form-control" id="floatingInput" placeholder="게시글 비밀번호" name="post_password"/>
                <br/>
                <button className="w-100 btn btn-lg btn-primary" type="submit">삭제</button>
            </form>
        );
    }
}

//게시글 수정 클래스
class PostRewriteForm extends react.Component{
    render(){
        const textStyle = {
            fontSize: "18pt",
            fontWeight: "900",
            fontFamily: "굴림"
        }

        return(
            <form style={{width: "50%", anlign: "center"}} action={'/boardRewrite/'+this.props.page} method='post'>
                <p style={textStyle}>제목</p>
                <input type="text" className="form-control" id="floatingInput" placeholder="게시글 제목" name="post_name"/>
                <br/>
                <p style={textStyle}>내용</p>
                <textarea type="text" className="form-control" id="floatingInput" placeholder="수정 할 내용" name="post_contain"/>
                <br/>
                <p style={textStyle}>비밀번호</p>
                <input type="PASSWORD" className="form-control" id="floatingInput" placeholder="게시글 비밀번호" name="post_password"/>
                <br/>
                <button className="w-100 btn btn-lg btn-primary" type="submit">수정하기</button>
            </form>
        );
    }
}

//서버에서 페이지 받아오기
class PageFactory extends react.Component{

    //콜백에서 자유로운 스테이트 변수
    state = {
        boardPage: [],
    };

    //콜백으로 /getList에서 서버랑 통신 후 데이터 받아와서 스테이트에 삽입
    getPage = () => {
        Axios.get("http://localhost:5500/board/getListPage/"+this.props.page, {})
            .then((res) => {
                console.log(res.data)
                this.setState({boardPage : res.data});
            })
            .catch((err) => {
                console.log(err);
            });
    };
    //클래스가 호출된 직후 한번 호출 * 초기화 작업에 사용됨
    componentDidMount = () =>{
        this.getPage();
    }
    render(){
        const pageData = this.state.boardPage;

        return(
            <>
                { pageData.map((dataSet) => (
                        <PageForm 
                            key={dataSet.post_id}
                            post_name={dataSet.post_name} 
                            post_writer={dataSet.post_writer} 
                            post_contain={dataSet.post_contain} 
                            wirted_date={dataSet.wirted_date}
                        />
                        )
                    )
                }
            </>
           
        );
    }
}

//본체
function BoardPage() {
    const { page } = useParams();

    const [visibleDeleteForm, setvisibleDeleteForm] = useState(false);
    const on_offDeleteForm = () => {
        setvisibleDeleteForm(!visibleDeleteForm);
    }
    const [visibleRewriteForm, setvisibleRewriteForm] = useState(false);
    const on_offRewriteForm = () => {
        setvisibleRewriteForm(!visibleRewriteForm);
    }
    return (
        <div align="center">
            <div style={{width: "80%"}} align="right">
                <PageFactory page={ page }/>
                <Link to="/Board"><Button variant="info">목록</Button></Link>
                <Button variant="secondary" onClick={on_offRewriteForm}>수정하기</Button>
                <Button variant="danger" onClick={on_offDeleteForm}>삭제하기</Button>
                {visibleDeleteForm && <PostDeleteForm page={page}/>}
                {visibleRewriteForm && <PostRewriteForm page={page}/>}
            </div>
        </div>
    );
}

export default BoardPage;