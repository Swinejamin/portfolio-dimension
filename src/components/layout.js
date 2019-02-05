import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import '../assets/scss/main.scss'
import Header from './Header'
const Container = styled.div`
  min-width: 320px;
  max-width: 1200px;
  width: 80vw;
  margin: 0 auto;
  padding: 20px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.9)
  );
  border-radius: 8px;
`
const Inner = styled.div`
  max-height: 75vh;
  overflow: auto;
  padding: 0 10px;
  @media screen and (max-width: 800px) {
    max-height: 54vh;
  }
`
const Layout = props => {
  const { children, location } = props
  const showFullHeader = ['', '/', '/success', '/success/'].includes(
    location.pathname
  )
  console.log(location.pathname)
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'Developer Portfolio for Benjamin Swineford',
              },
              { name: 'keywords', content: 'developer, portfolio' },
            ]}
          >
            <html lang="en" />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
              integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
              crossorigin="anonymous"
            />
          </Helmet>
          <div id="bg" />
          <Header showFullHeader={showFullHeader} />
          {children && (
            <Container>
              <Inner>{children}</Inner>
            </Container>
          )}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
