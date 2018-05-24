import React from 'react'
import {connect} from 'react-redux'

class List extends React.Component {
  render () {
    const persons = this.props.people.map(person=> <div>
      <h1>{person.name}</h1>
      <p>{person.email}</p>
      <p>{person.phone}</p>
    </div>)
    return (
      <div>
        {persons}
      </div>
    )
  }
}

export default connect(state => state)(List);