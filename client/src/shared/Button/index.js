import React from 'react'
import styled from 'styled-components'

const StyleAnchor = styled.a`
  padding: .6em 1.3em;
  display: inline-block;
  background-color: #55efc4;
  border-radius: 5px;
  color: white;
  text-decoration: none;
`

const Button = (props) => (
  <StyleAnchor href={props.href}>
    {props.children}
  </StyleAnchor>
)

export default Button
