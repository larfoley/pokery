import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import Link from "../../../shared/Link"
import ButtonLink from "../../../shared/ButtonLink"
import Wrapper from "./Wrapper"

const Navbar = props => (
  <Wrapper>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <ButtonLink to="/register">Sign Up</ButtonLink>
  </Wrapper>
)

export default Navbar
