import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #2e2e2e;
  color: white;
  padding: 1em 2em;
  overflow: auto;
  display: table;
  width: 100%;
  font-size: 13px;

  @media screen and (min-width: 700px) {
    font-size: 15px;
  }

`

export default props => (
  <StyledHeader>{props.children}</StyledHeader>
)
