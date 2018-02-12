import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  overflow: auto;
`

const Input = styled.input`
  width: 100%;
  padding: .7em;
`

export default props => (
  <Wrapper>
    <Input placeholder={props.placeholder} type="text" />
  </Wrapper>
)
