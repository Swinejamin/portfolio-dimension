import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyledButtonList,
  StyledForm,
  StyledFormField,
  StyledLabel,
  StyledIconList,
} from '../components/Contact'
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
        <h2 className="major">Contact Me</h2>
        <StyledForm
          name="contact"
          data-netlify="true"
          method="POST"
          action="/success"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <StyledFormField className="field half first">
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <input type="text" name="name" id="name" required />
          </StyledFormField>
          <StyledFormField className="field half">
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <input type="email" name="email" id="email" required />
          </StyledFormField>
          <StyledFormField className="field">
            <StyledLabel htmlFor="message">Message</StyledLabel>
            <textarea name="message" required id="message" rows="4" />
          </StyledFormField>
          <StyledButtonList className="actions">
            <li>
              <button type="submit" value="Send Message" className="special">
                Submit
              </button>
            </li>
            <li>
              <button type="reset" value="Reset">
                Reset
              </button>
            </li>
          </StyledButtonList>
        </StyledForm>
        <StyledIconList>
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
        </StyledIconList>
      </article>
    )
  }
}
