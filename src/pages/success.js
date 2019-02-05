import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Success = props => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <section id="one">
      <h2>Thanks!</h2>
      <div className="inner">
        <span className="image main" />
        <p>Your message has been submitted!</p>
      </div>
    </section>
  </Layout>
)

export default Success
