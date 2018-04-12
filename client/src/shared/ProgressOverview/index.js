import React from 'react'
import axios from 'axios'

class ProgressOverview extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      earnings:	0,
      winRate:	0,
      mostSuccesfullLocation: "",
      mostSuccesfullVariation: "",
      mostSuccesfullGameType: ""
    }
  }

  componentDidMount() {

    const pokerSessions = this.props.sessions || []
    let earnings,
        winRate,
        mostSuccesfullLocation,
        mostSuccesfullGameType,
        mostSuccesfullVariation;

    earnings = this.calculateEarnings(pokerSessions)
    winRate = this.calculateWinRate(pokerSessions) + "%"
    mostSuccesfullLocation = this.calculateMostSuccesfullLocation(pokerSessions)
    mostSuccesfullVariation = this.calculateMostSuccesfullVariation(pokerSessions)
    mostSuccesfullGameType = this.calculateMostSuccesfullGameType(pokerSessions)

    this.setState({
      earnings,
      winRate,
      mostSuccesfullLocation,
      mostSuccesfullVariation,
      mostSuccesfullGameType
    })

  }

  calculateWinRate(sessions) {
    if (sessions.length === 0) {
      return 0
    }

    let wins = 0
    sessions.forEach(session => {
      if (session.amountWon > 0) {
        wins++
      }
    })
    return (wins / sessions.length) * 100
  }

  calculateEarnings(sessions) {
    console.log(this.props);
    if (sessions.length === 0) {
      return 0
    }

    if (sessions.length === 1) {
      return sessions[0].amountWon - sessions[0].buyIn
    }

    return sessions
      .map(session => session.amountWon - session.buyIn)
      .reduce((a, b) => a + b, 0)

  }

  calculateMostSuccesfullLocation(sessions) {
    let locations = {}
    let mostSuccesfullLocation;
    let mostWins = 0;

    sessions.forEach(session => {
      locations[session.location] = {wins: 0}
    })

    sessions.forEach(session => {
      if (session.amountWon > 0) {
        locations[session.location].wins++
      }
    })

    for (var key in locations) {
      if (locations.hasOwnProperty(key)) {
        if (locations[key].wins >= mostWins) {
          mostSuccesfullLocation = key
        }
      }
    }

    return mostSuccesfullLocation? mostSuccesfullLocation : "Unknown"
  }

  calculateMostSuccesfullVariation(sessions) {
    let texasHoldemEarnings = 0;
    let omahaEarnings = 0;

    sessions.map(session => {
      if (session.variation === "omaha") {
        omahaEarnings += (session.amountWon - session.buyIn)
      } else {
        texasHoldemEarnings += (session.amountWon - session.buyIn)
      }
    })

    if (texasHoldemEarnings === 0 && omahaEarnings === 0) {
      return "Unknown"
    }
    return texasHoldemEarnings > omahaEarnings? "Texas Hold'em" : "Omaha"
  }

  calculateMostSuccesfullGameType(sessions) {
    if (sessions.length === 0) {
      return "Unknown"
    }
    const calcGameTypeEarnings = type => (
      sessions
        .filter(session => session.gameType === type)
        .map(game => (game.amountWon - game.buyIn))
        .reduce((a,b) => a + b, 0)
    )
    const tournamentGamesEarnings = calcGameTypeEarnings("tournament")
    const cashGamesEarnings = calcGameTypeEarnings("Cash Game")
    return tournamentGamesEarnings > cashGamesEarnings? "Tournaments" : "Cash Games"
  }


  render() {
    return (
      <div>
        <div><strong>Earnings</strong></div>
        <div>&euro; {this.state.earnings} </div>
        <br/>
        <div><strong>Win Rate</strong></div>
        <div>{this.state.winRate}</div>
        <br/>
        <div><strong>Most Succesfull Location</strong></div>
        <div>{this.state.mostSuccesfullLocation}</div>
        <br/>
        <div><strong>Most Succesfull Variation </strong></div>
        <div>{this.state.mostSuccesfullVariation}</div>
        <br/>
        <div><strong>Most Succesfull Game Type</strong></div>
        <div>{this.state.mostSuccesfullGameType}</div>
        <br/>
      </div>
    )
  }

}

export default ProgressOverview
