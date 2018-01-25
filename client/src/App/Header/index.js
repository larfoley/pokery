import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Wrapper from './Wrapper'


const Header = (props) => (
  <Wrapper>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>

  </Wrapper>
)

export default Header
