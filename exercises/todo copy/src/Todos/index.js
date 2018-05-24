import React, {Component} from 'react';
import TodoComponent from './TodoComponent';

function TodoList(props) {
    const allTodos = props.todos.map((todo, i) => {
        return <TodoComponent handleEdit={props.editTodo} handleDelete={props.deleteTodo} info={todo} key={todo._id}/>
    });

    return allTodos;
}

export default TodoList;
