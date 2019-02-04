import React, { Component } from 'react'
import posed from 'react-pose'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'
import styled from 'styled-components'
const Container = styled.div`
  min-width: 320px;
  max-width: 1200px;
  width: 80vw;
  margin: 0 auto;
  padding: 30px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.9)
  );
`
export default class PageTransition extends React.Component {
  render() {
    const { entry, exit, children, transitionStatus: status } = this.props
    const entryIndex = entry.state.pageIndex
    const exitIndex = exit.state.pageIndex
    console.log(entryIndex, exitIndex, status)
    return (
      <TransitionState>
        {({ transitionStatus: status }) => {
          return <Container>{children}</Container>
        }}
      </TransitionState>
    )
  }
}
