import React from 'react'
import Button from '../../shared/Button/'

// Components
import Wrapper from './Wrapper'
import Title from './Title'
import Col from './Col'
import Hamburger from './Hamburger'


const Header = (props) => (
  <Wrapper>
    <Col>
      <Title><Hamburger>foo</Hamburger> Poker Tracker</Title>
    </Col>
    <Col align="right">
      <Button href="/add-session">Add a Session</Button>
    </Col>
  </Wrapper>
)

export default Header
