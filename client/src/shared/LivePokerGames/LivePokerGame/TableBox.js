import React from 'react'
import styled from 'styled-components'

const TableBox = styled.div`
   padding: 1em;
//    margin-bottom: 1em;
`
export default props => <TableBox>{props.children}</TableBox>