import React, { Component } from "react"

// Components

import SectionTitle from "../SectionTitle"
import PageSection from "../PageSection"
import LivePokerGame from "./LivePokerGame"
import axios from "axios"

class LivePokerGames extends Component {

  constructor(props){
    super(props);
    this.state = {
      livePokerGames: [],
      limit: props.limit? props.limit : 0
    }
  }

  componentWillMount(){
    axios.get('/api/live-poker-timetables')
    .then(response => {
      
      const filteredPokerGames = [];
      const livePokerGames = response.data;


      if (true) {
        for (var i = 0; i < 3; i++) {
          filteredPokerGames.push(response.data[i])
        }
      }

      this.setState({livePokerGames: filteredPokerGames.length > 0 ? filteredPokerGames : livePokerGames });

      
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  

  render() {

    if (this.state.livePokerGames.length > 0) {
      return (
        <div>
          {this.state.livePokerGames.map((item, i) => (
          
              <LivePokerGame key = {i} 
                type={item.type}
                address={item.address}
                buyIn={item.buyIn}
                date={item.date}
                time={item.time}
              />
        ))}
        </div>
      )
    } else {
      return <p> Loading...</p>
    }
  
    }

}
export default LivePokerGames
