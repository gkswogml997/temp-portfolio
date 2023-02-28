import react from 'react'

class SignUPPage extends react.Component{
    render(){
        return(<main className="form-signin w-100 m-auto">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <br />
                    <form action='/signupwrite' method='post'>
                        <h1 className="h3 mb-3 fw-normal" style={{textAlign: "center"}}>PoPal 회원가입</h1>

                        <div>
                            <input type="text" className="form-control" id="floatingInput" placeholder="닉네임" name="nickname"/>
                            <br />
                        </div>
                        <div>
                            <input type="text" className="form-control" id="floatingPassword" placeholder="식별번호" name="password"/>
                            <br />
                        </div>
                        <div>
                            <input type="text" className="form-control" id="floatingPasswordAgain" placeholder="식별번호 확인" name="password_again"/>
                            <br />
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">가입하기</button>
                        <p className="mt-5 mb-3 text-muted">※ 식별번호는 비밀번호가 아닙니다. DB 저장시 암호화 되지 않으니 평소에 사용하던 비밀번호의 사용을 자제해주세요.</p>
                    </form>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        </div>
    </main>
    );
    }
}

export default SignUPPage;