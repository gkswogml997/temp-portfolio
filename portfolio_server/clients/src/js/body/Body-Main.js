//통신모듈
import React from 'react';

//리액트 - 라우터
import { Routes, Route } from 'react-router-dom';

//바디 구성요소
import CarouselMain from "./CarouselMain";

import HTMLColorDictionary from "./ETC/HTMLColorDictionary";
import HTMLTagDictionary from "./ETC/HTMLTagDictionary";
import NoPage from './ETC/noPage';

import BoardList from './Board/BoardList';
import BoardPage from './Board/BoardPage';
import PostWrite from './Board/BoardWrite';

import SignUPPage from './popal/SignUpPage';
import SignUpSuccessPage from './popal/SignUpSuccessPage';
import ErrPage from './popal/ErrPage';

const BodyMain = () => {    
    return (
        <>
            <Routes>
                <Route path="/" element={<CarouselMain/>}></Route>
                <Route path="/HTMLcolor" element={<HTMLColorDictionary/>}></Route>
                <Route path="/HTMLtag" element={<HTMLTagDictionary/>}></Route>
                <Route path="/board" element={<BoardList/>}></Route>
                <Route path="/board/post/:page" element={<BoardPage/>}></Route>
                <Route path="/Board/postWrite" element={<PostWrite/>}></Route>
                <Route path="/POPALsignup" element={<SignUPPage/>}></Route>
                <Route path="/SignUpSuccessPage" element={<SignUpSuccessPage/>}></Route>
                <Route path="/ErrPage/:errReason" element={<ErrPage/>}></Route>
                <Route path="*" element={<NoPage/>}></Route>
            </Routes>
        </>
    );
    
}

export default BodyMain;