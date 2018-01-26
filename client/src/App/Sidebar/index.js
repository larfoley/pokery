import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import Link from './Link'

const Wrapper = styled.div`
  background-color: #eee;
  color: white;
  position: fixed;
  width: 300px;
  top: 0;
  bottom: 0;
  margin-top: 50px;
`

const Sidebar = (props) => (
  <Wrapper>
    <ul>
      <li><Link to="/"><FontAwesome name='home' /> Home</Link></li>
      <li><Link to="/about"><FontAwesome name='search' /> Find a Game</Link></li>
      <li><Link to="/"><FontAwesome name='line-chart' /> Progress</Link></li>
      <li><Link to="/about"><FontAwesome name='cog' /> Settings</Link></li>
    </ul>
  </Wrapper>
)

export default Sidebar
