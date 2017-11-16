import React, {Component} from 'react';
import axios from 'axios';
import TodoComponent from './TodoComponent';

class TodoList extends Component{
  constructor(){
    super();

    this.state = {
      todos: []
    }
  }
  componentDidMount(){
    axios.get('https://api.vschool.io/marcus/todo/').then(response => {
      this.setState({todos: response.data});
    })
  }
  render(){
    const allTodos = this.state.todos.map(todo =>  <TodoComponent
              title={todo.title}
              description={todo.description}
      />
    );
    return allTodos;
  }
}

export default TodoList;
