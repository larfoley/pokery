import React from 'react'
import styled from 'styled-components'
import Label from './Label'

const StyledSelect = styled.select`
  border: none;
  background-color: ${props => props.theme.input_bg_color};
  color: ${props => props.theme.input_color};
  border: 1px solid ${props => props.theme.input_border_color};
  padding: .6em;
  width: 100%;
  font-family: inherit;
  margin-bottom: 1em;
  font-size: 1em;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

`


const Select = props => (
  <div>
    <Label>{props.label}</Label>
    <StyledSelect
      border={props.border}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      >
      {
        props.options? props.options.map(option => (
          <option value={option} key={option}>{option}</option>
        ))
        : null
      }
    </StyledSelect>
  </div>
)

export default Select
