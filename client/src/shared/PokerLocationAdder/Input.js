import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  overflow: auto;
`

const Input = styled.input`
  width: 100%;
  padding: .7em;
  border: 2px solid #f5f5f5;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary_color};
  }
`

export default props => (
  <Wrapper>
    <Input placeholder={props.placeholder} type="text" onChange={props.onChange}/>
  </Wrapper>
)
