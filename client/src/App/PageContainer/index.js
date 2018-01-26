import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2em;
  position: relative;
  margin-left: 300px;
`

const PageContainer = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
)

export default PageContainer
