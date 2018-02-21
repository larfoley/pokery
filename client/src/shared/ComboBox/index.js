import React from 'react'
import styled from 'styled-components'

const ComboBox = styled.select`
  background-color: white;
  padding: .5em;
  border: 1px solid #eee;
  width: 100%;
  margin-bottom: 1em;

  &:hover {
    cursor: pointer;
  }

  & option {
  }
`

export default props => (
  <ComboBox onChange={props.onChange} name={props.name}>
    {props.options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.value}
      </option>
    ))}
  </ComboBox>
)
