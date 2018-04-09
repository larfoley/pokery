import React from 'react'
import PokerSession from './PokerSession'
import axios from 'axios'

class PokerSessions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokerSessions:[],
      limit:props.limit
    }
  }

  componentDidMount() {
    axios.get('/api/poker-sessions')
      .then(res => {
        let pokerSessions = res.data
        this.setState({ pokerSessions })
      })
      .catch(error => console.log(error))
  } 


  render() {
    const sessions = this.state.pokerSessions
    const limit = this.state.limit
    const editSession = this.props.editPokerSession
    console.log(this.state.pokerSessions)
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
                  editPokerSession={this.props.editPokerSession}
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
              editPokerSession={this.props.editPokerSession}
            />
          ))
      
      ): <p>No sessions</p>
    )
  }

}

export default PokerSessions
 