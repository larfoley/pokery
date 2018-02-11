import React from 'react'
import styled from 'styled-components'

const ComboBox = styled.select`
  background-color: white;
  padding: .5em;
  border: 1px solid #eee;
  width: 100%;
  &:hover {
    cursor: pointer;
  }

  & option {
  }
`

export default props => (
  <ComboBox>
    {props.options.map(option => (
      <option>{option.value}</option>
    ))}
  </ComboBox>
)
