import React from 'react'
import {connect} from 'react-redux'
import {addNew} from './redux'

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      phone: '',
      email: '',
    }
  }
  
  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNew(this.state)
    this.clearState()
  }
  
  clearState = () => {
    this.setState({
      name: '',
      phone: '',
      email: ''
    })
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
        Phone: <input type="text" name='phone' value={this.state.phone} onChange={this.handleChange}/>
        Email: <input type="text" name='email' value={this.state.email} onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
    )
  }
}

export default connect(null, {addNew})(Form);