import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addContact} from './redux';
import Contact from './Contact'
import Form from './Form'


class App extends Component {
  constructor(){
    super()

    this.state = {
      id: 0,
      name: '',
      phone: '',
      email: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState(prevState => {
      return {
        id: prevState.id + 1,
        name: '',
        phone: '',
        email: ''
      }
    })
  }


  render() {
    const {name, phone, email} = this.state;
    const myContacts = this.props.contactList.map((contact, i)=> <Contact id={contact.id} name={contact.name} phone={contact.phone} email={contact.email} /> )
    return (
      <div>
        <Form name={name} email={email} phone={phone} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {myContacts}
      </div>
    );
  }
}

export default connect(state=>state, {addContact})(App);
