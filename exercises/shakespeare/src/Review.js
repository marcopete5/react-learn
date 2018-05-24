import React, { Component } from 'react'
import axios from 'axios'

class Review extends Component {
  constructor(){
    super()

    this.state = {
      comment: '',
      showing: false
    }
  }

  getBody = (id) => {
    axios.get(`http://shakespeare.podium.co/api/reviews/${id}`, {'headers':{'Authorization': 'koOheljmQX'}})
      .then(response => {
        this.setState({comment: response.data.data.body, showing: !this.state.showing});
      })
  }

  render(){
  return (
    this.state.showing ?
    <div>
      <h1>{this.props.author}</h1>
      <p>{this.props.rating}</p>
      <p>{this.props.publish}</p>
      <p>{this.state.comment}</p>
      <button onClick={() =>this.getBody(this.props.id)}>Hide Comment</button>
    </div>
    :
    <div>
      <h1>{this.props.author}</h1>
      <p>{this.props.rating}</p>
      <p>{this.props.publish}</p>
      <button onClick={() =>this.getBody(this.props.id)}>See Comment</button>
    </div>
  )
}
}

export default Review
