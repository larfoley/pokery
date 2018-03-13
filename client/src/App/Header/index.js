import React from 'react'
import ButtonLink from '../../shared/ButtonLink/'

// Components
import Wrapper from './Wrapper'
import Title from './Title'
import Col from './Col'
import Hamburger from './Hamburger'


const Header = (props) => (
  <Wrapper>
    <Col>
      <Title><Hamburger>foo</Hamburger> Poker</Title>
    </Col>
    <Col align="right">
      <ButtonLink to="/add-session">Add a Session</ButtonLink>
    </Col>
  </Wrapper>
)

export default Header
