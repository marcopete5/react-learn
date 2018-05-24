import React, {Component} from 'react';

class TodoComponent extends Component{
  render(){
    return(
      <div>
        <h1>Title: {this.props.title}</h1>
        <p>Description: {this.props.description}</p>
        <p>Price: {this.props.price}</p>
      </div>
    )
  }
}

export default TodoComponent;
