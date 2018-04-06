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
      .then(Response => {
        console.log("Sessions",Response);
        let sessions = Response.data
        console.log(sessions)
        this.setState({pokerSessions : Response.data})
        
      })
      .catch(error => console.log(error)); 
      
      
  }


  render() {
    const sessions = this.state.pokerSessions;
    console.log(sessions)
    return (
      <div>
        {this.state.pokerSessions.map((item, i) => <PokerSession key={i} 
        
        />)}
      </div>
    )
  }

}

export default PokerSessions
