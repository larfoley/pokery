import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: ${props => props.theme.primary_color};
  color: white;
`

export default props => (
  <StyledHeader>{props.children}</StyledHeader>
)
