import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  margin: 10px;
  background-color: white;
  padding: 1em;
  box-shadow: inset 0 1px 0 0 rgba(200,200,200,0.4), 0 1px 1px 0 rgba(0,0,0,0.3);

  @media screen and (min-width: 700px) {
    margin: 3em 2em;
    padding: 2em;
  }
`

const PageSection = (props) => (
  <StyledSection>
    {props.children}
  </StyledSection>
)

export default PageSection
