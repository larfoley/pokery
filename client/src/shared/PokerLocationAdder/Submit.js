import styled from 'styled-components'
import css from '../../styles/variables.js'
import Button from '../Button'

const SubmitButton = styled.button`
  float: left;
  background-color: ${css.primary_color};
  border-color: ${css.primary_color};
  outline: 0;
  color: white;
  padding-top: .9em;
  padding-bottom: .9em;
  margin: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
`

export default SubmitButton.withComponent(Button)
