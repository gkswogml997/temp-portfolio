import React from "react";

class HTMLTagDictionary extends React.Component {
    render() {
        const textStyle = {
            textAlign: "center"
        }
        return (
            <>
                <div className="col-md-12" style={textStyle}>
                <h3>HTML의 기본 구조</h3>
                <table className="table table-bordered" align="center" style={{width: "50%"}}>
                    <thead>
                        <tr className="table-success">
                            <th>태그</th>
                            <th>기능</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>!DOCTYPE</th>
                            <th>마크업 언어용 DTD 태그이다.</th>
                        </tr>
                        <tr>
                            <th>html</th>
                            <th>위의 DTD를 제외한 전체를 이 태그로 둘러싼다.</th>
                        </tr>
                        <tr>
                            <th>head</th>
                            <th>HTML 문서의 속성을 지정하기 위한 태그이다.</th>
                        </tr>
                        <tr>
                            <th>body</th>
                            <th>HTML 문서의 본 모양을 나타내기 위한 태그이다.</th>
                        </tr>
                        <tr>
                            <th>title</th>
                            <th>HTML의 제목을 선언하는 태그.</th>
                        </tr>
                        <tr>
                            <th>meta</th>
                            <th>HTML의 부가 정보를 선언하는 태그. 예를 들어 charset 속성을 쓰면 인코딩을 선언할 수 있다.</th>
                        </tr>
                        <tr>
                            <th>link</th>
                            <th>별도의 CSS 선언 파일, 파비콘 등을 연결하는 태그.</th>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h3>텍스트 꾸미기</h3>
                <table className="table table-bordered" align="center" style={{width: "50%"}}>
                    <thead>
                        <tr className="table-success">
                            <th>태그</th>
                            <th>기능</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>h1~h6</th>
                            <th>제목(heading)을 표시할 때 사용된다. h1이 가장 크고 h6이 가장 작다.</th>
                        </tr>
                        <tr>
                            <th>p</th>
                            <th>새 문단(paragraph)을 연다.</th>
                        </tr>
                        <tr>
                            <th>b</th>
                            <th>두껍게(bold) 효과를 준다.</th>
                        </tr>
                        <tr>
                            <th>i</th>
                            <th>텍스트를 기울임꼴(italic)로 표시한다.</th>
                        </tr>
                        <tr>
                            <th>strong</th>
                            <th>포함된 텍스트를 강하게 강조할 때 사용한다.</th>
                        </tr>
                        <tr>
                            <th>em</th>
                            <th>strong보다 약한 강조를 나타낼 때 사용한다.</th>
                        </tr>
                        <tr>
                            <th>ins</th>
                            <th>문서에 삽입(insert)된 텍스트, 즉 밑줄을 표시한다.</th>
                        </tr>
                        <tr>
                            <th>del</th>
                            <th>문서에서 삭제(delete)된 텍스트, 즉 취소선을 표시한다.</th>
                        </tr>
                        <tr>
                            <th>s</th>
                            <th>취소선(strikethough)을 표시한다.</th>
                        </tr>
                        <tr>
                            <th>u</th>
                            <th>밑줄(underline)을 표시한다.</th>
                        </tr>
                        <tr>
                            <th>sup</th>
                            <th>텍스트를 위첨자(superscript)로 표시한다.</th>
                        </tr>
                        <tr>
                            <th>sub</th>
                            <th>텍스트를 아래첨자(subscript)로 표시한다.</th>
                        </tr>
                        <tr>
                            <th>small</th>
                            <th>텍스트를 조금 더 작게 표시한다.</th>
                        </tr>
                        <tr>
                            <th>br</th>
                            <th>문단 내 줄바꿈(line break).</th>
                        </tr>
                        <tr>
                            <th>hr</th>
                            <th>가로줄(horizontal rule)을 넣는다.</th>
                        </tr>
                        <tr>
                            <th>blockquote</th>
                            <th>인용구를 기술하는 태그이다.</th>
                        </tr>
                        <tr>
                            <th>pre</th>
                            <th>서식 있는(Preformatted) 텍스트를 넣기 위한 태그이다. </th>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h3>목록 만들기</h3>
                <table className="table table-bordered" align="center" style={{width: "50%"}}>
                    <thead>
                        <tr className="table-success">
                            <th>태그</th>
                            <th>기능</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>ul</th>
                            <th>순서 없는 목록(unordered list)을 표시한다.</th>
                        </tr>
                        <tr>
                            <th>li</th>
                            <th>목록에서 각 항목(list item)은 li와 /li사이에 넣는다.</th>
                        </tr>
                        <tr>
                            <th>ol</th>
                            <th>순서 있는 목록(ordered list)을 표시한다.</th>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h3>링크, 이미지 삽입</h3>
                <table className="table table-bordered" align="center" style={{width: "50%"}}>
                    <thead>
                        <tr className="table-success">
                            <th>태그</th>
                            <th>기능</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>a</th>
                            <th>
                                하이퍼링크를 생성하는 태그이다. Anchor의 줄임말이다.
                            </th>
                        </tr>
                        <tr>
                            <th>img</th>
                            <th>
                                페이지에 이미지를 추가하는 태그이다.
                                <ul>
                                    <li>src: source의 약자로 이미지파일의 경로를 지정하는 태그 속성이다.</li>
                                    <li>alt: 이미지를 볼 수 없는 경우에 이미지에 대한 설명을 제공한다.</li>
                                    <li>title: 이미지에 대한 추가 정보를 제공한다. </li>
                                    <li>height, width: 이미지의 세로, 가로폭을 지정한다. </li>
                                </ul>
                            </th>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h3>테이블 그리기</h3>
                <table className="table table-bordered" align="center" style={{width: "50%"}}>
                    <thead>
                        <tr className="table-success">
                            <th>태그</th>
                            <th>기능</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>태그</th>
                            <th>기능</th>
                        </tr>
                        <tr>
                            <th>table</th>
                            <th>테이블을 만드는 태그이다.</th>
                        </tr>
                        <tr>
                            <th>tr</th>
                            <th>행(table row)을 시작한다.</th>
                        </tr>
                        <tr>
                            <th>td</th>
                            <th>표의 내용(table data), 셀을 표현한다.</th>
                        </tr>
                        <tr>
                            <th>th</th>
                            <th>
                                테이블의 행, 열의 머리말(table heading)을 나타낸다. 기본적으로 가운데로 정렬되고 굵은 글씨로 표시된다.
                                <ul>
                                    <li>colspan, rowspan속성으로 셀을 병합할 수 있다.</li>
                                    <li>colspan은 열을 병합한다.</li>
                                    <li>rowspan은 행을 병합한다.</li>
                                </ul>
                            </th>
                        </tr>
                        <tr>
                            <th>caption</th>
                            <th>테이블의 제목을 기술한다.</th>
                        </tr>
                        <tr>
                            <th>
                                <ul>
                                    <li>colgroup</li>
                                    <li>col</li>
                                </ul>
                            </th>
                            <th>테이블 상단에 넣어 테이블의 열 정보를 기술한다. 주로 일괄적으로 셀의 너비를 지정할 때 쓰인다.</th>
                        </tr>
                        <tr>
                            <th>
                                <ul>
                                    <li>thead</li>
                                    <li>tbody</li>
                                    <li>tfoot</li>
                                </ul>
                            </th>
                            <th>테이블의 세부 구조를 기술한다. 각각 표의 상단, 본문, 하단 부분에 대응한다.</th>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h3>인풋</h3>
                <table className="table table-bordered" align="center" style={{width: "50%"}}>
                    <thead>
                        <tr className="table-success">
                            <th>태그</th>
                            <th>기능</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>form</th>
                            <th>입력값을 받는 영역을 지정한다. </th>
                        </tr>
                        <tr>
                            <th>input</th>
                            <th>
                                입력값 요소를 지정한다. type에 따라 다른 입력값을 취한다.
                                <ul>
                                    <li>text: 한 줄 짜리 문자열 값. 기본값이다.</li>
                                    <li>number: 숫자.</li>
                                    <li>url: 도메인 주소.</li>
                                    <li>email: 이메일.</li>
                                    <li>tel: 전화번호.</li>
                                    <li>search: 검색어.</li>
                                    <li>range: 지정한 범위의 숫자.</li>
                                    <li>color: 색.</li>
                                    <li>date: 날짜.</li>
                                    <li>time: 시각.</li>
                                    <li>datetime: 날짜+시각.</li>
                                    <li>checkbox</li>
                                    <li>checkbox: 선택/해제할 수 있는 항목.</li>
                                    <li>button: 누를 수 있는 버튼을 생성한다.</li>
                                    <li>submit: 누를 경우 입력값을 전송시키는 버튼을 생성한다.</li>
                                    <li>image: submit + img 태그.</li>
                                    <li>reset: 누를 경우 입력값을 초기화시키는 버튼을 생성한다.</li>
                                    <li>hidden: 투명라인. 입력값을 수정하지 않고 곧바로 보낼 때 쓰인다. 소스를 열어보지 않으면 사용자에게는 보이지 않는다.</li>
                                    <li>file: 파일 업로드에 쓰인다.</li>
                                </ul>
                            </th>
                        </tr>
                        <tr>
                            <th>textarea</th>
                            <th>여러 줄의 문자열 값을 받는다.</th>
                        </tr>
                        <tr>
                            <th>button</th>
                            <th>input type="button"와 같다. 차이점은 태그 내에도 HTML 지정이 가능해서 표현의 폭이 넓다.</th>
                        </tr>
                        <tr>
                            <th>output</th>
                            <th>input 태그처럼 입력값이지만 수정할 수 없다. 외형상으로는 그냥 문자열이다.</th>
                        </tr>
                        <tr>
                            <th>datalist</th>
                            <th>검색어에 들어갈 목록을 지정한다</th>
                        </tr>
                        <tr>
                            <th>select</th>
                            <th>선택 목록.</th>
                        </tr>
                        <tr>
                            <th>option</th>
                            <th>선택 목록에 들어갈 항목. input type="radio"와 같다.</th>
                        </tr>
                        <tr>
                            <th>fieldset</th>
                            <th>폼 요소를 그룹으로 묶어준다. </th>
                        </tr>
                        <tr>
                            <th>legend</th>
                            <th>fieldset으로 묶어준 그룹에 제목을 지정해 준다.</th>
                        </tr>
                        <tr>
                            <th>label</th>
                            <th>해당 요소의 이름을 지정한다. 해당 이름을 클릭하면 요소가 자동으로 선택된다.</th>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h3>멀티미디어</h3>
                <table className="table table-bordered" align="center" style={{width: "50%"}}>
                    <thead>
                        <tr className="table-success">
                            <th>태그</th>
                            <th>기능</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>video</th>
                            <th>비디오 재생</th>
                        </tr>
                        <tr>
                            <th>audio</th>
                            <th>오디오 재생</th>
                        </tr>
                        <tr>
                            <th>canvas</th>
                            <th>스크립트를 통해 그래픽을 그리는 데 사용될 수 있다.</th>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h3>외부 컨텐츠 삽입</h3>
                <table className="table table-bordered" align="center" style={{width: "50%"}}>
                    <thead>
                        <tr className="table-success">
                            <th>태그</th>
                            <th>기능</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>object</th>
                            <th> 웹 페이지 또는 외부 프로그램을 임베드한다</th>
                        </tr>
                        <tr>
                            <th>embed</th>
                            <th> 웹 페이지 또는 외부 프로그램을 임베드한다</th>
                        </tr>
                        <tr>
                            <th>iframe</th>
                            <th>
                                페이지 안에서 또 페이지를 볼 수 있다. 예를 들면 문서에서 구글 지도 등을 넣는 것이 있다.
                                <ul>
                                    <li>src: 넣을 페이지의 주소를 지정한다.</li>
                                    <li>height, width: 프레임의 높이, 너비를 지정한다.</li>
                                    <li>sandbox: iframe에 샌드박스 정책을 지정한다. 주로 사용하는 값은 allow-same-origin, allow-popups, allow-scripts</li>
                                    <li>frameborder: 프레임의 테두리 표시 여부를 지정한다. 0은 표시하지 않음, 1은 표시함.</li>
                                    <li>allowfullscreen: 전체 화면 모드로 전환할 수 있도록 허용한다.</li>
                                </ul>
                            </th>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h3>레이아웃 태그</h3>
                <table className="table table-bordered" align="center" style={{width: "50%"}}>
                    <thead>
                        <tr className="table-success">
                            <th>태그</th>
                            <th>기능</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>header</th>
                            <th>일반적으로 페이지나 해당 섹션의 가장 윗부분에 위치한다. </th>
                        </tr>
                        <tr>
                            <th>nav</th>
                            <th>내비게이션(navigation)의 약자로, 일반적으로 상단바 등 사이트를 안내하는 요소에 사용된다.</th>
                        </tr>
                        <tr>
                            <th>main</th>
                            <th>문서의 주된 콘텐츠를 표시한다. 이 태그는 두 개 이상 보여져서는 안 된다.</th>
                        </tr>
                        <tr>
                            <th>article</th>
                            <th>웹 페이지의 내용에 사용하는 태그이다. <br />문서나 페이지, 사이트에서 독립적으로 배포 혹은 재사용(예를 들어 투고 같은)할 수 있는 섹션에 사용한다.</th>
                        </tr>
                        <tr>
                            <th>section</th>
                            <th>웹 페이지의 섹션에 사용하는 태그이다. <br />웹 페이지를 의미적으로 각각의 파트로 구분하기 위해 쓰는 태그이다. </th>
                        </tr>
                        <tr>
                            <th>aside</th>
                            <th>본문의 주요 부분을 표시하고 남은 부분을 설명하는 태그이다.</th>
                        </tr>
                        <tr>
                            <th>footer</th>
                            <th>일반적으로 페이지나 해당 파트의 가장 아랫부분에 위치한다.</th>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h3>기타</h3>
                <table className="table table-bordered" align="center" style={{width: "50%"}}>
                    <thead>
                        <tr className="table-success">
                            <th>태그</th>
                            <th>기능</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>script</th>
                            <th>스크립트를 사용한다. </th>
                        </tr>
                        <tr>
                            <th>div</th>
                            <th>박스 또는 레이어. </th>
                        </tr>
                    </tbody>
                </table>
                </div>
                    
            </>
        );
    };
}


export default HTMLTagDictionary;