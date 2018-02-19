import React from 'react'
import styled from 'styled-components'
import Link from '../../shared/Link'
import Float from '../../shared/Float'

const StyledHeader = styled.div`
  background-color: black;
  padding: 1em;
  color: white;
  overflow: auto;
`

const StyledH1 = styled.h1`
  color: white;
  margin: 0;
  font-size: 1em;
`



const Header = props => (
    <StyledHeader>
      <Float to="left">
        <StyledH1>
          <Link to="/">Pokery</Link>
        </StyledH1>
      </Float>
      <Float to="right">
        <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link>
      </Float>
    </StyledHeader>
)

export default Header
