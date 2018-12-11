import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)
        
        this.state = props.inputs
    }

    handleChange = e => {
        let {name, value, type, checked} = e.target;
        this.setState({[name]: type === 'checkbox' ? checked : value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.submit(this.state)
        this.props.reset && this.setState(this.props.inputs)
    }

    render() {
        const props = {
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            inputs: this.state
        }
        return this.props.render(props)
    }
}

export default Form;
