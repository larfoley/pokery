import React, { Component } from "react"

// Components

import SectionTitle from "../SectionTitle"
import PageSection from "../PageSection"
import Games from "./Games"
import axios from "axios"

class LivePokerGame extends Component {

  constructor(props){
    super(props);
    this.state = {
      livePokerGames: []
    }
  }

  componentDidMount(){
    axios.get('/api/live-poker-timetables')
    .then(response => {
      this.setState({livePokerGames: response.data});
      
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  render() {
  
    return (
      <div>
        <PageSection>
          <SectionTitle title="Find A Live Game"/>
        </PageSection>
        
        <PageSection>
          {this.state.livePokerGames.map((item, i) => (
              <Games key = {i} 
                type={item.type}
                address={item.address}
                buyIn={item.buyIn}
                date={item.date}
                time={item.time}
              />
        ))}
        </PageSection>
        </div>
  )}

}
export default LivePokerGame
