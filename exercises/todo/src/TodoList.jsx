import React, {Component} from 'react';
import TodoComponent from './TodoComponent';
import {getTodo} from './utils/api';

class TodoList extends Component{
  constructor(){
    super();

    this.state = {
      todos: []
    }
  }
  componentDidMount(){
      getTodo().then(response => {
        this.setState({todos: response.data});
    })
  }


  render(){
    const allTodos = this.state.todos.map((todo,i) =>  <TodoComponent
              key = {todo.title + i}
              title={todo.title}
              description={todo.description}
              price={todo.price}
      />
    );
    return allTodos;
  }
}

export default TodoList;
