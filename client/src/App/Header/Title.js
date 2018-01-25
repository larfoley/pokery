import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  margin-top: 0;
`

export default props => (
  <Title>{props.children}</Title>
)
