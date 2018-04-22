import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  overflow: auto;
`

const Input = styled.input`
  width: 100%;
  padding: .7em;
  border: 2px solid ${props => props.theme.input_border_color};
  background-color: ${props => props.theme.bg_color};
  color: ${props => props.theme.text_color};
  ::-webkit-input-placeholder {
     color: ${props => props.theme.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.bg_color};
  }
`

export default props => (
  <Wrapper>
    <Input placeholder={props.placeholder} type="text" onChange={props.onChange}/>
  </Wrapper>
)
