import React from 'react'
import PokerSession from './PokerSession'
import axios from 'axios'

class PokerSessions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokerSessions:[],
      pokerLocations: [],
      limit: props.limit
    }
  }

  componentWillMount() {
    let pokerSessions, pokerLocations;

    axios.get('/api/poker-sessions')
      .then(res => {
        pokerSessions = res.data
        return axios.get('api/poker-locations')
      })
      .then(res => {
        pokerLocations = res.data.map(l => l.name)
        this.setState({ pokerSessions, pokerLocations})
      })
      .catch(error => console.log(error))
  }


  render() {
    const sessions = this.state.pokerSessions
    const limit = this.state.limit
    const editSession = this.props.editPokerSession
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
                  locations={this.state.pokerLocations}
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
              locations={this.state.pokerLocations}
            />
          ))

      ): <p>No sessions</p>
    )
  }

}

export default PokerSessions
