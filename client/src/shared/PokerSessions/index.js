import React from 'react'
import PokerSession from './PokerSession'
<<<<<<< HEAD
import axios from 'axios'
import Input from '../Input'
import Select from '../Select'
class PokerSessions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokerSessions:[],
      loading: true,
      limit: props.limit? props.limit : true,
      location: ["foo", "fyy"],
      
    }
  }

  componentWillMount() {
    this.setState({loading: true})
    axios.get('/api/poker-sessions')
      .then(res => {
        console.log("Sessions", res);
        let sessions = res.data
        console.log(sessions)
        this.setState({pokerSessions : sessions, loading : false});
      })
      .catch(error => console.log(error));      
  }

  hanldeLocationChange(event){
    this.setState({loading: true, location: event.target.value})
    axios.get(`/api/poker-sessions?location=${event.target.value}`)
     .then(res => {
       let sessions = res.data;
       console.log(sessions)
       this.setState({pokerSessions : sessions, loading: false})
     })
     .catch(error => console.log(error));
  }

  render() {
    const sesh = this.state.pokerSessions;
    const sessions = this.state.pokerSessions
      .filter((sesh, s) => s < this.state.limit? true : false);
    console.log(sessions);
    const noSessions = this.state.pokerSessions.length?(
    <p></p>) : (<h4>No Sessions</h4>
    );

    return (      
      <div>
        <Select name={this.state.location} onChange={this.hanldeLocationChange.bind(this)} label="location" options={["foo", "fyy"]} />
        {sessions.map((item, i) => <PokerSession key={i} 
          location = {item.location}
          variation = {item.variation}
          gameType = {item.gameType}
          buyIn = {item.buyIn}
          amountWon = {item.amountWon}
        />)}
        
      </div>
=======

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
            } else { return null}
          }) :
          sessions.map((session, i) => (
            <PokerSession
              key={parseInt(i, 10) + sessions.length}
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
>>>>>>> 3bca346b65a403118f33d8170bf0ddffd68e1ede
    )

}

export default PokerSessions
