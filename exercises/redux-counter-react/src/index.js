import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import counter from './redux';
import App from './App';

const store = createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </ Provider>
    , document.getElementById('root'));

