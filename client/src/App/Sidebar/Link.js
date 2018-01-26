import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  padding: 1em;
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #ddd;
  color: #333;
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
  span {
    margin-right: 8px;
  }
`

const SidebarLink = (props) => (
  <StyledLink to={props.to}>
    {props.children}
  </StyledLink>
)

export default SidebarLink
