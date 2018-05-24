import React, { Component } from 'react'
import axios from 'axios'
import Review from './Review'
import Search from './Search'

const isSearched = searchTerm => item => item.author.toLowerCase().startsWith(searchTerm.toLowerCase()) || item.rating == searchTerm;

class Reviews extends React.Component {
  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }


  componentDidMount() {
    axios.get('http://shakespeare.podium.co/api/reviews', {'headers':{'Authorization': 'koOheljmQX'}})
      .then(response => {
        this.setState({reviews: response.data.data})
    })
  }

  onSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value})
  }

  sortByRatingAsc = () => {
    this.setState(prevState => ({reviews: prevState.reviews.sort((a,b) => (a.rating - b.rating))}));
  }

  sortByRatingDesc = () => {
    this.setState(prevState => ({reviews: prevState.reviews.sort((a,b) => (b.rating - a.rating))}));
  }

  render () {
    const reviewList = this.state.reviews.filter(isSearched(this.state.searchTerm)).map(review => <Review author={review.author} rating={review.rating} publish={review.publish_date} id={review.id} key={review.id} />)
    return (
      <div>
        <button onClick={this.sortByRatingAsc}>Sort low to high</button>
        <button onClick={this.sortByRatingDesc}>Sort high to low</button>
        <Search onChange={this.onSearchChange} value={this.state.searchTerm} />
        <div>{reviewList}</div>
      </div>
    )
  }
}

export default Reviews;
