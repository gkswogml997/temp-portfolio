import AlertIcon from "../../../png/AlertIcon.png";
import { Link } from 'react-router-dom';

function ErrPage() {
    const textStyle = {
        textAlign: "center",
        color: "Crimson"
    }

    return(
        <div id="noPage">

            <img src={AlertIcon} alt=" "style={{width: "256px", height: "256px", display: "block", margin: "auto"}}/>

            <h1 style={textStyle}>
                존재하지 않는 페이지 입니다.
            </h1>
            <div style={{width: "50%", display: "block", margin: "auto"}}>
            <Link to="/"><button className="w-100 btn btn-lg btn-primary" > 메인으로 돌아가기 </button></Link>
            </div>
                
        </div>
    );
}


export default ErrPage;