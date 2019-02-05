import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  margin: 0 auto;
  font-size: 2rem;
  text-transform: uppercase;
  list-style-type: none;
  text-align: center;
  padding: 0;
  display: flex;
  min-height: 150px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  li {
    padding: 0;
  }
`

class IndexPage extends React.Component {
  state = {}

  render() {
    const showCHildren = true
    return showCHildren ? (
      <List>
        <li>Creative</li>
        <li>Passionate</li>
        <li>Unique</li>
      </List>
    ) : null
  }
}

export default IndexPage
