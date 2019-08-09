import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} />
        <Reviews reviews={this.props.reviews.filter(review => review.restaurant_id === this.props.restaurant.id)} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const msp = state => {
    return {
        reviews: state.reviews
    }
}

const mdp = dispatch => {
    return {
        addReview: review => dispatch({type: 'ADD_REVIEW', review}),
        deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
    }
}

export default connect(msp, mdp)(ReviewsContainer)
