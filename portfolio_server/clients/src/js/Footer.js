import Contextinfo from "./Contactinfo";

const Footer = (prop) => {
    return (
        <>
            <Contextinfo />
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#header" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#body" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#footer" className="nav-link px-2 text-muted">About</a></li>
                </ul>
                <p className="text-center text-muted">
                    © 2022 GMSGHE, Inc 본 사이트는 react-Bootstrap v2.6.0 프레임워크가 사용되었습니다.
                </p>
            </footer>
        </>
    
    );
}

export default Footer;