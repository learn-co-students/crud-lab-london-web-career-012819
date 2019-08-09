import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = e => this.setState({text: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurant_id: this.props.restaurant.id})
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Review</label>
            <input type={"text"} onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type={"submit"} />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
