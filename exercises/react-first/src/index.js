import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './App.css';
import './Index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render(<App/>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
