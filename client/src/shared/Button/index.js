import React from 'react'
import styled from 'styled-components'

const StyleAnchor = styled.a`
  padding: 2em;
  display: inline-block;
  background-color: black;
`

const Button = (props) => (
  <StyleAnchor href={props.href}>
    {props.children}
  </StyleAnchor>
)

export default Button
