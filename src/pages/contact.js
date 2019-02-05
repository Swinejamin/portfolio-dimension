import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Contact extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <article
        id="contact"
        className={`${this.props.article === 'contact' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
      >
        <h2 className="major">Contact Benjamin</h2>
        <form data-netlify="true" method="post">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" required id="message" rows="4" />
          </div>
          <ul className="actions">
            <li>
              <butotn type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <button type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        <ul className="icons">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twitter.com/swinejamin"
              className="icon fab fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/swinejamin"
              className="icon fab fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/swinejamin"
              className="icon fab fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/swinejamin"
              className="icon fab fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
