import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  margin: 0;
  float: left;
  font-size: 1.5em
`

export default props => (
  <Title>{props.children}</Title>
)
