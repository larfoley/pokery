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
<<<<<<< HEAD

=======
  margin-bottom: 1.25em;
>>>>>>> da98e3cb6ddcd2d2a7b2cc328a1b16683bd7a59d
`



const SectionTitle = (props) => (
  <StyledH2>
    {props.title}
  </StyledH2>
)

export default SectionTitle
