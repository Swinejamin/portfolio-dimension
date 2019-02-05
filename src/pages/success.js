import React from 'react'
import Helmet from 'react-helmet'

const Success = props => (
  <>
    <Helmet>
      <title>Message Submitted!</title>
      <meta name="description" content="Message submitted page" />
    </Helmet>

    <section id="one">
      <h2>Thanks!</h2>
      <div className="inner">
        <span className="image main" />
        <p>Your message has been submitted!</p>
      </div>
    </section>
  </>
)

export default Success
