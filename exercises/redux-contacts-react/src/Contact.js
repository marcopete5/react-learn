import React from 'react';
import {connect} from 'react-redux'
import {deleteContact} from './redux'

const Contact = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h3>Phone: {props.phone}</h3>
            <h3>Email: {props.email}</h3>
            <button onClick={() => props.deleteContact(props.id)} >Delete</button>
        </div>
    );
};

export default connect(state=>state, {deleteContact})(Contact);