import styled from 'styled-components'
import Button from '../Button'

const SubmitButton = styled.button`
  float: left;
  background-color: ${props => props.theme.primary_color};
  border-color: ${props => props.theme.primary_color};
  outline: 0;
  color: white;
  padding-top: .9em;
  padding-bottom: .9em;
  margin: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
`

export default SubmitButton.withComponent(Button)
