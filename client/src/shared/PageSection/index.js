import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  margin: 3em 2em;
  background-color: white;
  padding: 2em;
  box-shadow: inset 0 1px 0 0 rgba(200,200,200,0.4), 0 1px 1px 0 rgba(0,0,0,0.3)
`

const PageSection = (props) => (
  <StyledSection>
    {props.children}
  </StyledSection>
)

export default PageSection
