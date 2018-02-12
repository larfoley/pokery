import React from 'react'
import styled from 'styled-components'
import css from '../../../styles/variables.js'

const SubmitButton = styled.button`
  float: left;
  background-color: ${css.primary_color};
  border-color: ${css.primary_color} !important;
  outline: 0;
  color: white;
  padding: .7em;
`

export default SubmitButton
