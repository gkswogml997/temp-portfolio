import { Link } from 'react-router-dom';

function SignUpSuccessPage() {
    const textStyle = {
        textAlign: "center"
    }

    return(
        <div id="SignUpSuccessPage">

            <h1 style={textStyle}>
                회원가입에 성공 했습니다.
            </h1>
            <div style={{width: "50%", display: "block", margin: "auto"}}>
            <Link to="/"><button className="w-100 btn btn-lg btn-primary" > 메인으로 돌아가기 </button></Link>
            </div>
                
        </div>
    );
}


export default SignUpSuccessPage;