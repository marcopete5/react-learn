import React from 'react'
import Pets from './Pets'

const Friend = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h3>Age: {props.age}</h3>
            <Pets info={props.pets}/>
        </div>
    )
}

export default Friend;