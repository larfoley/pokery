import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  padding-top: 1px;
  margin-top: 60px;

  @media screen and (min-width: 700px) {
    margin-left: 300px;
    margin-top: 68px;
  }
`

const PageContainer = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
)

export default PageContainer
