import React, {Component} from 'react';
import {addTodo} from './utils/api';

class AddTodo extends Component{
  constructor(){
    super();

    this.state = {
      title: '',
      description: '',
      price: 0
    }
  }

  handleInput = e => {
    let val = e.target.value;
    val = e.target.name === 'price' ? parseInt(e.target.value): val;
    this.setState({[e.target.name]: val});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    addTodo(this.state);
  }

  render(){
    return(
      <div>
        <h1>Add Todo</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name="title" onChange={this.handleInput} placeholder='Title' />
          <textarea type='textbox' name="description" onChange={this.handleInput} placeholder='Description'/>
          <input type='number' name="price" onChange={this.handleInput} placeholder='Price' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
