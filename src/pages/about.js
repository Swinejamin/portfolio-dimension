import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { graphql } from 'gatsby'
const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`
const StyledHeader = styled.h2`
  font-size: 1.8rem;
  @media screen and (min-width: 1200px) {
    white-space: nowrap;
  }
`
const StyledList = styled.ul`
  font-size: 1.5rem;
  @media screen and (min-width: 1000px) {
    padding-right: 45px;
  }
`
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
            style={{ maxWidth: 500, margin: '0 auto' }}
          />
        </span>

        <p>
          Programming has been a hobby of mine for as long as I can remember. In
          2014, that hobby bossomed into a passion when I started my career as a
          front end developer. Since then, I've grown to love the unique
          opportunities (and challenges!) of creating a great user experience.
          I'm now very comfortable taking a static design and bringing it to
          life in a way that shines at every size, in every browser. I'm
          familiar with modern design tools (Photoshop, Illustrator, Zeplin) and
          frameworks (Bootstrap, Material Design).
        </p>
        <p>
          I'm not huge on backend work, although I do it in a pinch. I'd rather
          be given a solid API and get to use that data as a pallete to paint a
          masterpiece!
        </p>
        <Row>
          <section>
            <StyledHeader className="">I'm great at:</StyledHeader>
            <StyledList>
              <li>HTML5 (Semantic markup, structured microdata)</li>
              <li>
                CSS3 (animations, responsive layouts, flexbox, grid, BEM, SCSS)
              </li>
              <li>ES2018+ (Babel, Webpack, Node)</li>
              <li>PHP</li>
            </StyledList>
          </section>
          <section>
            <StyledHeader className="">I love working with:</StyledHeader>
            <StyledList>
              <li>HTML5 (Semantic markup, structured microdata)</li>
              <li>CSS3 (animations, responsive layouts, flexbox, grid)</li>
            </StyledList>
          </section>
          <section>
            <StyledHeader className="">I want to learn:</StyledHeader>
            <StyledList>
              <li>Typescript</li>
              <li>Advanced CSS Grid</li>
              <li>TDD with Jest</li>
            </StyledList>
          </section>
        </Row>
      </article>
    )
  }
}

export const pageQuery = graphql`
  query {
    family: file(relativePath: { eq: "family.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
