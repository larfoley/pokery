import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import css from '../../styles/variables'
import { darken } from 'polished'

const StyledLink = styled(Link)`
  padding: 1em;
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid ${darken(0.03, css.sidebar_bg_color)};
  color: white;
  text-decoration: none;
  transition: .3s;
  &:hover {
    background-color: ${css.primary_color};
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
