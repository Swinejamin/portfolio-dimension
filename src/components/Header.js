import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

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
  const { location } = props
  const showFullHeader = ['', '/', '/success'].includes(location.pathname)
  return (
    <header
      id="header"
      className={`${props.location.pathname === '/' ? '' : 'inner'}`}
    >
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
        <span className="icon fas fa-desktop" />
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
  location: {
    pathname: '/',
  },
}
export default Header
