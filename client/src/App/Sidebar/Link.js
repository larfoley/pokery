import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { darken } from 'polished'

// props.theme.sidebar_bg_color
// darken(0.03, '')

const StyledLink = styled(Link)`
  padding: 1em;
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.sidebar_bg_color};
  color: white;
  text-decoration: none;
  transition: .3s;
  &:hover {
    background-color: ${props => props.theme.primary_color};
  }
  span {
    margin-right: 10px;
  }
`

const SidebarLink = (props) => (
  <StyledLink to={props.to}>
    {props.children}
  </StyledLink>
)

export default SidebarLink
