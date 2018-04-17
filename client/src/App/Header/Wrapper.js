import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: #232526;  /* fallback for old browsers */
  ${'' /* background: -webkit-linear-gradient(to bottom, #414345, #232526);
  background: linear-gradient(to bottom, #414345, #232526); */}
${'' /* box-shadow: 0 5px 5px -5px #333; */}
  background-color: ${props => props.theme.header_bg_color};
  color: white;
  padding: 1em 2em;
  overflow: auto;
  display: table;
  width: 100%;
  font-size: 10px;
  position: fixed;
  top: 0;
  z-index: 1;

  @media screen and (min-width: 700px) {
    font-size: 15px;
  }

`

export default props => (
  <StyledHeader>{props.children}</StyledHeader>
)
