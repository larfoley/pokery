import React from 'react'
import Container from './Container'
import Label from './Label'

const FormField = props => (
  <Container>
    {
      props.label?
        <Label>{props.label}</Label> :
        null
    }
    {props.children}
  </Container>
)

export default FormField
