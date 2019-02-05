import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
const links = [
  {
    to: '/',
    title: 'Intro',
  },
  {
    to: '/about',
    title: 'About',
  },
  {
    to: '/work',
    title: 'Work',
  },
  {
    to: '/contact',
    title: 'Contact',
  },
]

const Header = props => {
  const { showFullHeader } = props

  return (
    <header id="header" className={`${showFullHeader ? '' : 'inner'}`}>
      <nav>
        <ul>
          {links.map((link, index) => {
            const { title, to } = link
            return (
              <li>
                <Link to={to}>{title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="logo">
        <StaticQuery
          query={imageQuery}
          render={data => (
            <Img
              fluid={data.headshot.childImageSharp.fluid}
              style={{
                maxWidth: '100%',
                height: '100%',
                width: '100%',
                flexShrink: 0,
                margin: '0 auto',
              }}
            />
          )}
        />
      </div>
      <div className={`content`}>
        <div className={`blurb`}>
          <h1>Benjamin Swineford</h1>
          <p>
            A front end developer passionate about building things in{' '}
            <a href="https://reactjs.org/">React</a>
          </p>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}
Header.defaultProps = {
  showFullHeader: true,
}
export default Header
const imageQuery = graphql`
  query {
    headshot: file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
