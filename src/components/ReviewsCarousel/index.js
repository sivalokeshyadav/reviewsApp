import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIdIndex: 0}

  onRightSwipe = () => {
    const {activeIdIndex} = this.state

    const {reviewsList} = this.props

    const reviewLength = reviewsList.length

    if (activeIdIndex < reviewLength - 1) {
      this.setState(prevState => ({
        activeIdIndex: prevState.activeIdIndex + 1,
      }))
    }
  }

  onLeftSwipe = () => {
    const {activeIdIndex} = this.state

    if (activeIdIndex > 0) {
      this.setState(prevState => ({
        activeIdIndex: prevState.activeIdIndex - 1,
      }))
    }
  }

  activeReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="body-container">
        <img src={imgUrl} alt={username} />

        <p className="name">{username}</p>

        <p className="company-name">{companyName}</p>

        <p className="para">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props

    const {activeIdIndex} = this.state

    const currentReview = reviewsList[activeIdIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>

        <div className="mini-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="button"
            onClick={this.onLeftSwipe}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.activeReview(currentReview)}

          <button
            type="button"
            data-testid="rightArrow"
            className="button"
            onClick={this.onRightSwipe}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
