import React, {Component} from 'react';

class TodoComponent extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default TodoComponent;
