import React from 'react';
import FormComponent from './FormComponent';

class FormContainer extends React.Component {
  constructor(){
    super();
    this.state={
      title:""
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render () {
    return (
      <FormComponent
        title={this.state.title}
        handleChange={this.handleChange}
        />
    )
  }
}

export default FormContainer;
