import React from 'react'
import styled from 'styled-components'

const Col = styled.div`
  display: table-cell;
  width: 50%;
  vertical-align: middle;
  text-align: ${props => props.align? props.align : null}
`

export default props => (
  <Col align={props.align}>{props.children}</Col>
)
