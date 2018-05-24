import React from 'react';
import {connect} from 'react-redux';
import {removeRecipe} from '../../Redux/recipes';
import Form from '../../shared/Form';

function Recipe(props){
    let {index, name, category, cookTime, removeRecipe} = props;
    return (
        <div>
            <h3>{name}</h3>
            <p>type: {category}</p>
            <p>prep time: {cookTime}</p>
            <button onClick={() => removeRecipe(index)}>X</button>
            <Form edit {...props} />
        </div>
    )
}

export default connect(null, {removeRecipe})(Recipe);