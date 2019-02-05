import React, { Component } from 'react'
import Img from 'gatsby-image'

import { graphql } from 'gatsby'
export default class About extends Component {
  static propTypes = {}

  render() {
    const { data } = this.props
    const { family } = data
    return (
      <article id="about">
        <h2 className="major">About Me</h2>
        <span className="image main">
          <Img
            fluid={family.childImageSharp.fluid}
            style={{ maxWidth: 600, margin: '0 auto' }}
          />
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

export const pageQuery = graphql`
  query {
    family: file(relativePath: { eq: "family.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
