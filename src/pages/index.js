import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'

class IndexPage extends React.Component {
  state = {}

  render() {
    const {
      loading,
      isArticleVisible,
      timeout,
      articleTimeout,
      article,
    } = this.state
    return (
      <>
        <img src="" />
      </>
    )
  }
}

export default IndexPage
