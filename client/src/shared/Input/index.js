import React from 'react'
import styled from 'styled-components'
import Label from './Label'

const StyledInput = styled.input`
  ${'' /* border: none;
  color: #D1D3E0;
  font-family: inherit;
  display: block;
  width: 100%;
  margin-bottom: 1.7em;
  padding: 1.5em;
  border-radius: 4px; */}

  ${'' /* border: 1px solid #eee; */}
  ${'' /* box-shadow: inset 0 1px 0 0 rgba(200,200,200,0.4), 0 1px 1px 0 rgba(0,0,0,0.3); */}
  margin-bottom: 1em;
  display: block;
  border: 1px solid ${props => props.theme.input_border_color};
  width: 100%;
  color: gray;
  padding: .6em;
  border-radius: 5px;
  border: 1px solid #eee;
  border: none;
  background-color: ${props => props.theme.bg_color};
  color: ${props => props.theme.input_color};
`

const Input = props => (
  <div>
    {props.label? <Label htmlFor="" >{props.label}</Label> : null}
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
      required={props.required}
    />
  </div>
)

export default Input
