import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import Link from './Link'

const Wrapper = styled.div`
  background-color: #414345;
  color: white;
  position: fixed;
  width: 300px;
  top: 0;
  bottom: 0;
  margin-top: 46px;
  margin-left: -300px;
  transition: .3s;

  &.isOpen {
    margin-left: 0;
    z-index: 2;
  }

  @media screen and (min-width: 700px) {
    margin-top: 66px;
    margin-left: 0;
  }
`

const Sidebar = (props) => (
  <Wrapper id="app-sidebar">
    <ul>
      <li><Link to="/home"><FontAwesome name='home' /> Home</Link></li>
      <li><Link to="/find-a-game"><FontAwesome name='search' /> Find a Game</Link></li>
      <li><Link to="/progress"><FontAwesome name='line-chart' /> Progress</Link></li>
      <li><Link to="/settings"><FontAwesome name='cog' /> Settings</Link></li>
    </ul>
  </Wrapper>
)

export default Sidebar
