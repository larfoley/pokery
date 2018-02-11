import React from 'react'
import styled from 'styled-components'
import Box from '../Box'

const PokerLocation = styled.div`
  margin-top: 1em;
`

export default props => (
    <PokerLocation>
      <Box>
        {props.name}
        {props.children}
      </Box>
    </PokerLocation>
)
