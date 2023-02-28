import AlertIcon from "../../../png/AlertIcon.png";
import { useParams, Link } from 'react-router-dom';

function ErrPage() {
    const { errReason } = useParams();
    const textStyle = {
        textAlign: "center"
    }

    return(
        <div id="errPage">

            <img src={AlertIcon} alt=" "style={{width: "256px", height: "256px", display: "block", margin: "auto"}}/>

            <h1 style={textStyle}>
                ERROR!!!
            </h1>
            <p style={textStyle}>
                <h2>{ errReason }</h2>
            </p>
            <div style={{width: "50%", display: "block", margin: "auto"}}>
            <Link to="/"><button className="w-100 btn btn-lg btn-primary" > 메인으로 돌아가기 </button></Link>
            </div>
                
        </div>
    );
}


export default ErrPage;