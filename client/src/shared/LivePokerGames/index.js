import React, { Component } from "react"

// Components

import SectionTitle from "../SectionTitle"
import PageSection from "../PageSection"
import LivePokerGame from "./LivePokerGame"
import FormField from "../FormField"
import ComboBox from "../ComboBox"
import axios from "axios"

class LivePokerGames extends Component {

  constructor(props){
    super(props);
    this.state = {
      livePokerGames: [],
      limit: props.limit? props.limit : 0,
      // day: "Thursday"
    }
  }

  componentWillMount(){
    axios.get('/api/live-poker-timetables')
    .then(response => {
      console.log(response.data);
      const filteredPokerGames = [];
      const livePokerGames = response.data;
     
      if (true) {
        for (var i = 0; i < 50; i++) {
            filteredPokerGames.push(response.data[i])
        }
      }
      
      this.setState({
                    livePokerGames: filteredPokerGames.length > 0? 
                    filteredPokerGames : livePokerGames
                    });  
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange(event) {
  
    this.setState({day: event.target.value});
  }
  
  render() {



    if (this.state.livePokerGames.length > 0 ) {
      return (
     
        <div>
             <FormField label="Day">
          <ComboBox  onChange={this.handleChange.bind(this)} name="day" options={[
            {value: "Monday"},
            {value: "Tuesday"},
            {value: "Wednesday"}
          ]}/>
        </FormField>
          {this.state.livePokerGames.map((item, i) => (
              <LivePokerGame key = {i} 
                type={item.type}
                address={item.address}
                buyIn={item.buyIn}
                date={item.date}
                time={item.time}
                day={item.day = this.state.day}
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
