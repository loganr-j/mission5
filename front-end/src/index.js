import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

<link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>

// ReactDOM.render((
//   <BrowserRouter>
//     <App /> {'Home.js', 'renters.js'}
//   </BrowserRouter>
//   ), document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
