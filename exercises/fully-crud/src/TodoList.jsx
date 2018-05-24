import React from 'react';
import axios from 'axios';
import Loading from './shared/Loading';
import Form from './shared/Form';

let todoUrl = 'https://api.vschool.io/marcus/todo/';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      loading: true
    }
  }

  componentDidMount(){
    axios.get(todoUrl)
      .then((response)=>{
        let {data} = response;
        this.setState({todos:data, loading: false})
      })
      .catch(err => {
        console.error(err);
      })
  }
  render () {
    let {todos, loading } = this.state;
    return (
      loading ?
      <Loading />
      :
      <div>
        {/*todo links goes here*/}
        <Form />
      </div>
    )
  }
}

export default TodoList;
