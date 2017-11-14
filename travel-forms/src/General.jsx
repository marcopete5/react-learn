import React, {Component} from 'react';

class General extends Component{
  constructor(){
    super();

    this.state = {
      fname: '',
      lname: '',
      age: 0,
      gender: 'Male'
    }

    
  }

  render(){
    return(
      <div>
        <input type='text' placeholder='First Name'></input>
        <input type='text' placeholder='Last Name'></input>
        <input type='number' placeholder='Age'></input>
        <input type='gender' placeholder='Gender'></input>
      </div>
    );
  }
}
