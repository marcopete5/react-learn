import React, {Component} from 'react';

const food = [];
class Form extends Component {
  constructor() {
    super();

    this.state = {
      fname: '',
      lname: '',
      age: 0,
      gender: 'male',
      checked: false,
      location: 'Please Choose a Location',
      food
    }

  }
  handleValue = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    console.log(event.target.name);
    if (event.target.type !== 'checkbox'){
      this.setState({[event.target.name]: value })
    }else if (event.target.type === 'checkbox' && event.target.checked) {
      food.push(event.target.value);
      this.setState({checked: value, food })
    } else if (event.target.type === 'checkbox' && !event.target.checked) {
      this.setState({checked: value })
      food.splice((food.indexOf(event.target.value)), 1);
    }
  }
  alertForm = event => {
    event.preventDefault();
    const listofood = food.map(item => ' ' + item)
    alert(`Name: ${this.state.fname} ${this.state.lname}\nAge: ${this.state.age}\nGender: ${this.state.gender}\nDietary Restrictions: ${listofood}\nLocation: ${this.state.location}`);
    this.clearInputs(event);
  }

  clearInputs = (event) => {
    console.dir(event.target.checked)
    for(var i = 0; i < event.target.checked.length; i++){
        event.target.checked[i].checked = false;
    }
    this.setState({
        fname: '',
        lname: '',
        age: 0,
        gender: 'male',
        checked: false,
        location: 'Please Choose a Location',
        food: []
    })
  }

  render() {
    return (<div>
      <form onSubmit={this.alertForm}>
        <input name='fname' type='text' onChange={this.handleValue} placeholder='First Name'/>
        <input name='lname' type='text' onChange={this.handleValue} placeholder='Last Name'/>
        <input name='age' type='number' onChange={this.handleValue} placeholder='Age'/>
        <input name='gender' type='radio' onChange={this.handleValue} value='Male'/>Male
        <input name='gender' type='radio' onChange={this.handleValue} value='Female'/>Female
        <input name='checked' type='checkbox' onChange={this.handleValue} value='Kosher'/>Kosher
        <input name='checked' type='checkbox' onChange={this.handleValue} value='Vegan'/>Vegan
        <input name='checked' type='checkbox' onChange={this.handleValue} value='Gluten Free'/>Gluten Free
        <select name='location' value={this.state.location} onChange={this.handleValue}>
          <option value='Please Choose a Location'>Please Choose a Location</option>
          <option value='Hawaii'>Hawaii</option>
          <option value='California'>California</option>
          <option value='Montana'>Montana</option>
        </select>
        <button>Submit Form</button>
      </form>
    </div>);
  }
}

export default Form;
