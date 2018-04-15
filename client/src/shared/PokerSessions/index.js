import React from 'react'
import PokerSession from './PokerSession'
import axios from 'axios'

const PokerSessions = props => {

    const sessions = props.sessions
    const pokerLocations = props.locations.map(l => l.name)
    const limit = props.limit

    return (
      sessions.length > 0 ? (

        typeof limit === "number"?
          sessions.map((session, i) => {
            if (i <= limit) {
              return (
                <PokerSession
                  key={i}
                  id={session._id}
                  location={session.location}
                  variation={session.variation}
                  gameType={session.gameType}
                  buyIn={session.buyIn}
                  amountWon={session.amountWon}
                  date={session.date}
                  editPokerSession={props.editPokerSession}
                  deletePokerSession={props.deletePokerSession}
                  locations={pokerLocations}
                />
              )
            }
          }) :
          sessions.map((session, i) => (
            <PokerSession
              key={parseInt(i) + sessions.length}
              id={session._id}
              location={session.location}
              variation={session.variation}
              gameType={session.gameType}
              buyIn={session.buyIn}
              amountWon={session.amountWon}
              date={session.date}
              editPokerSession={props.editPokerSession}
              deletePokerSession={props.deletePokerSession}
              locations={pokerLocations}
            />
          ))

      ): <p>No sessions</p>
    )

}

export default PokerSessions
