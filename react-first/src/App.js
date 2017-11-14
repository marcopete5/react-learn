import React, {Component} from 'react';
import Navbar from './MyNav';
import Search from './Search';
import Table from './Table';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walker',
    num_comments: 3,
    points: 4,
    objectID: 0
}, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
} ];
const user = {
  firstName: "Marcus",
  lastName: 'Peterson'
}

const greet = {
  getUserName(user) {
    return user.firstName + ' ' + user.lastName
  }
}


class App extends Component {
  constructor(){
    super();

    this.state = {
      list,
      user,
      greet,
      searchTerm: ''
    }

    this.onDismiss = this.onDismiss.bind(this);
    // this.onClickMe = this.onClickMe.bind(this);
  }
  onClickMe = ()=> {
    console.log(this);
  }
  onSearchChange = (event)=> {
    this.setState({ searchTerm: event.target.value});
  }
  onDismiss(id){
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: updatedList});
  }

  render() {
    return (
      <div className="App">
        <Navbar title='hello' />
        <h1>{greet.getUserName(user)}</h1>
        <Search
            value={this.state.searchTerm}
            onChange={this.onSearchChange}
            >
          Search
        </Search>
        <Table
            list={this.state.list}
            pattern={this.state.searchTerm}
            onDismiss={this.onDismiss}
            />
        <button
            onClick = {this.onClickMe}
            type='button'
            >
            Click Me
        </button>
      </div> );
      }
}

export default App;
