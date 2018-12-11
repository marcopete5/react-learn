import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BountyProvider from './BountyProvider'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BountyProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </BountyProvider>
    , document.getElementById('root'));

