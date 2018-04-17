import React from 'react'
import PokerSession from './PokerSession'
import ButtonLink from '../ButtonLink'

const RecentSessions = props => {
  const sessions = props.sessions || []
  return (
    sessions.length?
      <div>
        {sessions.reverse().map((session, i) => i < 3? <PokerSession key={i} session={session} /> : null)}
        <ButtonLink to="/session-history">See More Sessions</ButtonLink>
      </div>
        :
      <p>No sessions added yet</p>
  )
}

export default RecentSessions
