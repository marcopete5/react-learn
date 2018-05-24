import React from "react";

function FormComponent(props){
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Title: 
                <input 
                    name="title" 
                    value={props.title}
                    onChange={props.handleChange}
                />
            </label>
            <button>Add Todo</button>
        </form>
    )
}

export default FormComponent;
