import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import {connect} from "react-redux";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:8080/bounty')
        .then((response) => {
          this.setState({inputs: {...response.data}})
          // console.log(response.data);
        })
  }

  render() {
    
    return (
      <div>
        <Form add clear/>
        <List />
      </div>
    )
    // const mapStateToProps = state => {
    //   return {bountyList: state.bountyList }
    // }
  }

}


export default App;
