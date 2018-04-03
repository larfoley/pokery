import React from 'react'
import PokerSession from './PokerSession'
import axios from 'axios'

class PokerSessions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokerSessions:[],
    }
  }

  componentDidMount() {
    axios.get('/api/poker-sessions')
      .then(res => {
        console.log("Sessions", res);
        let sessions = res.data;
        this.setState({pokerSessions: sessions})
        console.log(sessions);
      })
      .catch(error => console.log(error));
      
      
  }


  render() {
    
    return (
      <div>
        {this.state.pokerSessions.map((session, i) => <PokerSession key={i} 
         variation = {session.variation}
        />)}
    
      </div>
    )
  }

}

export default PokerSessions
