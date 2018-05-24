import axios from 'axios';

export function addTodo(todo){
    return axios.post('https://api.vschool.io/marcus/todo/', todo).then(response=>{
    console.log('Success! ' + response.data);

  })
}

export function getTodo(todo){
    return axios.get('https://api.vschool.io/marcus/todo/')
}

export function putTodo(todo){
    return axios.post('https://api.vschool.io/marcus/todo/', todo).then(response=>{
    console.log('Success! ' + response.data);

  })
}

export function deleteTodo(todo){
    return axios.post('https://api.vschool.io/marcus/todo/', todo).then(response=>{
    console.log('Success! ' + response.data);

  })
}
