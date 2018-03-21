import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  margin: 3em 2em;
  background-color: white;
  padding: 2em;
`

const PageSection = (props) => (
  <StyledSection>
    {props.children}
  </StyledSection>
)

export default PageSection
