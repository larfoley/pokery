import React from 'react'
import styled from 'styled-components'
import Box from '../Box'

const PokerSession = props => {
  const session = props.session

  return (
    <Box>
      <small>{session.date}</small><br/>
      <strong>{session.variation + " " + session.gameType}</strong><br/>
      Earnings: {
        session.amountWon - session.buyIn?
          <span>&euro;{session.amountWon - session.buyIn}</span> : 0
        }
    </Box>
  )
}

export default PokerSession
