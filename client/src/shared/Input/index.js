import React from 'react'
import styled from 'styled-components'
import Label from './Label'

const StyledInput = styled.input`
  ${'' /* border: none;
  color: white;
  font-family: inherit;
  display: block;
  width: 100%;
  margin-bottom: 1.7em;
  padding: 1.5em;
  border-radius: 4px; */}

  border: 1px solid #eee;
  padding: 1em;
  margin-bottom: 1em;
  display: block;
  width: 100%;
`

const Input = props => (
  <div>
    {props.label? <Label htmlFor="" >{props.label}</Label> : null}
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
    />
  </div>
)

export default Input
