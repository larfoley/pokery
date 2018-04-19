import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  color: ${props => props.theme.headings_color};
  text-decoration: none;
  &:after {
    display: block;
    content: " ";
    width: 90px;
    height: 9px;
    background-color: ${props => props.theme.primary_color};
  }
  margin-bottom: 1.25em;
`



const SectionTitle = (props) => (
  <StyledH2>
    {props.title}
  </StyledH2>
)

export default SectionTitle
