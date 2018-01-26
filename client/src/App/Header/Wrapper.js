import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #2e2e2e;
  color: white;
  height: 50px;
`

export default props => (
  <StyledHeader>{props.children}</StyledHeader>
)
