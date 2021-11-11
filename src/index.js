import React from 'react';
import ReactDOM from 'react-dom';
// 引入BrowserRouter，包裹住App
import { BrowserRouter } from 'react-router-dom'
import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));


