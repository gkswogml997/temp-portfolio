//리액트 임포트
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'

//js
import Header from './js/Header';
import BodyMain from './js/body/Body-Main';
import Footer from './js/Footer';

//ErrorHandler
import reportWebVitals from './reportWebVitals';

//몸통
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <body>
        <Header />
        <BodyMain />
        <Footer />
      </body>
    </BrowserRouter>
  </React.StrictMode>
);

//오류 리턴
reportWebVitals();
