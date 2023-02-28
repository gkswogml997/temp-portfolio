import react from 'react'
import {Container, Row, Col} from "react-bootstrap"

class SignUPPage extends react.Component{
    render(){
        const textStyle = {
            fontSize: "18pt",
            fontWeight: "900",
            fontFamily: "굴림"
        }
        return(
            <Container>
                <br/>
                <form action='/boardWrite' method='post'>
                    <Row>
                        <Col md="10"><p style={textStyle}>게시글 제목</p><input type="text" className="form-control" id="floatingInput" placeholder="게시글 제목을 입력하세요" name="post_name"/></Col>
                        <Col md="2"><p style={textStyle}>작성자</p><input type="text" className="form-control" id="floatingInput" placeholder="작성자 닉네임" name="post_writer"/></Col>
                    </Row>
                    <Row>
                        <Col><p style={textStyle}>내용</p><textarea type="text" style={{height: "500px"}}className="form-control" id="floatingInput" placeholder="게시글 내용" name="post_contain"/></Col>
                    </Row>
                    <Row>
                        <Col><p style={textStyle}>비밀번호</p><input type="PASSWORD" className="form-control" id="floatingInput" placeholder="게시글 비밀번호" name="post_password"/></Col>
                    </Row>
                    <br/>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">글쓰기</button>
                </form>
            </Container>
                
    );
    }
}

export default SignUPPage;