import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageTransition from '../components/PageTransition'
import pic03 from '../images/pic03.jpg'
export default class About extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    const { transitionStatus, entry, exit, children } = this.props
    return (
      <article
        id="about"
        className={`${this.props.article === 'about' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
      >
        <h2 className="major">About</h2>
        <span className="image main">
          <img src={pic03} alt="" />
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
          eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat
          volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
          Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero
          et malesuada fames ac ante ipsum primis in faucibus. Cras viverra
          ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
        </p>
      </article>
    )
  }
}
