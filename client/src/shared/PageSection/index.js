import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  margin: 2.5em;
`

const PageSection = (props) => (
  <StyledSection>
    {props.children}
  </StyledSection>
)

export default PageSection
