import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Navbar from './Navbar';

function App(props) {
    return (
        <div>
            <Navbar />
            <Switch> 
              <Route exact path='/' component={Home} /> 
              <Route path='/about' component={About}/>
            </Switch>
        </div>
    )
}

export default App;
