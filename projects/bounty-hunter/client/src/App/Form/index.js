import React, {Component} from 'react';
import {connect} from "react-redux";
import {addBounty} from "../../Redux/bounty";

class Form extends Component {
  constructor(props){
    super(props);

    let {fname, lname, isLiving, amount, isJedi} = props;
    this.state = {
      inputs: {
        fname: fname || "",
        lname: lname || "",
        isLiving: isLiving || true,
        amount: amount || 0,
        isJedi: isJedi || true
      }
    }
  }

  handleChange = e => {
    let {name, value} = e.target;
    this.setState((prevState) => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]:value
        }
      }
    })
  }

  clearInputs = () => {
    this.setState({
      inputs: {
        fname: "",
        lname: "",
        isLiving: true,
        amount: 0,
        isJedi: true
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let {addBounty, add} = this.props;
    if (add){
      addBounty(this.state.inputs);
    }
    if (this.props.clear) {
      this.clearInputs();
    }
  }

  render(){
    let { fname, lname, isLiving, amount, isJedi } = this.state.inputs;
    return (
      <form onSubmit={this.handleSubmit}>
        First Name: <input onChange={this.handleChange} name="fname" value={fname} type="text" />
        Last Name:<input onChange={this.handleChange} name="lname" value={lname} type="text" />
        Living: <input onChange={this.handleChange} name="isLiving" value={isLiving} type="radio" />
        Dead: <input onChange={this.handleChange} name="isLiving" value={!isLiving} type="radio" />
        Bounty Amount: <input onChange={this.handleChange} name="amount" value={amount} type="number" />
        Sith: <input onChange={this.handleChange} name="isJedi" value={!isJedi} type="radio" />
        Jedi:<input tonChange={this.handleChange} name="isJedi" value={isJedi} type="radio" />
        <button>Submit</button>
      </form>
    )
  }


}

export default connect(null, {addBounty})(Form);
