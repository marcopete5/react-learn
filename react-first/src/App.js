import React, {Component} from 'react';
import Navbar from './MyNav';

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

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

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
    const {list, user, greet, searchTerm=''} = this.state;
    return (
      <div className="App">
        <Navbar title='hello' />
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          />
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        <form>
          <input
            type='text'
            value={searchTerm}
            onChange={this.onSearchChange}
            />
        </form>
        <h1>{greet.getUserName(user)}</h1>
        {list.filter(isSearched(searchTerm)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type='button'
                >
                Dismiss
              </button>
            </span>
          </div> )}
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
