import React from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import {connect} from "react-redux";

import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import TodoList from "./Todos";
import Profile from './Profile';
import ProtectedRoute from "./ProtectedRoute";

function App(props){
    const isAuthenticated = props.isAuthenticated;
    return (
        <div className="app-wrapper">
            <Navbar/>
            <Switch>
                    <Route exact path="/" render={(props)=>{
                       return  isAuthenticated ?
                        <Redirect to= "/profile"/> :
                        <Signup {...props}/>
                    }}/>
                    <Route path="/login" render={(props)=>{
                       return  isAuthenticated ?
                        <Redirect to= "/profile"/> :
                        <Login {...props}/>
                    }} />
                    <ProtectedRoute path="/todos" component={TodoList}/>
                    <ProtectedRoute path="/profile" component={Profile}/>
            </Switch>
        </div>
    )
}

export default withRouter(connect(state => state.user, {})(App));
