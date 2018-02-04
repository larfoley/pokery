import React from 'react'
import styled from 'styled-components'
import css from '../../styles/variables'

const StyledH2 = styled.h2`
  color: black;
  text-decoration: none;
  &:after {
    display: block;
    content: " ";
    width: 90px;
    height: 9px;
    background-color: ${css.primary_color};
  }
`

const SectionTitle = (props) => (
  <StyledH2>
    {props.title}
  </StyledH2>
)

export default SectionTitle
