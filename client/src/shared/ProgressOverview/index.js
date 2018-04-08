import React from 'react'
import axios from 'axios'

class ProgressOverview extends React.Component {

  constructor() {
    super()
    this.state = {
      earnings:	0,
      winRate:	0,
      mostSuccesfullLocation: "",
      mostSuccesfullVariation: "",
      mostSuccesfullGameType: ""
    }
  }

  componentDidMount() {
    let earnings, winRate, mostSuccesfullLocation;

    axios.get('/api/poker-sessions')
      .then(res => {
        const pokerSessions = res.data

        earnings = this.calculateEarnings(pokerSessions)
        winRate = this.calculateWinRate(pokerSessions) + "%"
        mostSuccesfullLocation = this.calculateMostSuccesfull(pokerSessions)

        this.setState({ earnings, winRate })

      })
      .catch(error => console.log(error))
  }

  calculateWinRate(sessions) {
    let wins = 0
    sessions.forEach(session => {
      if (session.amountWon > 0) {
        wins++
      }
    })
    return (wins / sessions.length) * 100
  }

  calculateEarnings(sessions) {
    return sessions.reduce((a, b) => a.amountWon + b.amountWon)
  }

  calculateMostSuccesfull(sessions) {
    let locations = {}
    let mostSuccesfullLocation;

    sessions.forEach(session => {
      locations[session.location] = {wins: 0}
    })

    sessions.forEach(session => {
      if (session.amountWon > 0) {
        locations[session.location].wins++
      }
    })


  }

  render() {
    return (
      <div>
        <div><strong>Earings</strong></div>
        <div>{this.state.earnings}</div>
        <br/>
        <div><strong>Win Rate</strong></div>
        <div>{this.state.winRate}</div>
        <br/>
        <div><strong>Most Succesfull Location</strong></div>
        <div>Unknown</div>
        <br/>
        <div><strong>Most Succesfull Variation </strong></div>
        <div>Unknown</div>
        <br/>
        <div><strong>Most Succesfull Game Type</strong></div>
        <div>Unknown</div>
        <br/>
      </div>
    )
  }

}

export default ProgressOverview
