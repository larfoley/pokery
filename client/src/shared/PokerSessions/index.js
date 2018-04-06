import React from 'react'
import PokerSession from './PokerSession'
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
    )
  }

}

export default PokerSessions
