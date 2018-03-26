import React from 'react'
import PokerSession from './PokerSession'
import axios from 'axios'

class PokerSessions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokerSessions: [
        {earnings: 100},
        {earnings: -20},
        {earnings: -20}
      ]
    }
  }

  componentWillMount() {
    axios.get('/api/poker-sessions')
      .then(res => {
        console.log("Sessions", res);
      })
  }


  render() {
    return (
      <div>
        {this.state.pokerSessions.map((session, i) => <PokerSession key={i} session={session} />)}
      </div>
    )
  }

}

export default PokerSessions
