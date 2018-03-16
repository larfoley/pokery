import React, { Component } from "react"

// Components

import SectionTitle from "../SectionTitle"
import PageSection from "../PageSection"
import LivePokerGame from "./LivePokerGame"
import FormField from "../FormField"
import ComboBox from "../ComboBox"
import axios from "axios"
import Button from "../Button"

class LivePokerGames extends Component {

  constructor(props){
    super(props);
    this.state = {
      livePokerGames: [],
      limit: props.limit? props.limit : 0,
      day : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()],
    }
  }

  componentDidUpdate() {
    axios.get('/api/live-poker-timetables')
    .then(response => {
      this.setState({
        loading: false,
        livePokerGames: response.data
          .filter(game => this.state.day === game.day)
          .filter((game, i) => i < this.state.limit? true : false)})
    })

    .catch(function (error) {
      console.log(error);
    })
  }

  handleDayChange(event) {
    this.setState({day: event.target.value});
  }

  loadMorePokerGames() {
    this.setState({limit: this.state.limit + 15,});
  }
  
  render() {

    if (this.state.livePokerGames.length > 0 ) {
      return (
     
        <div>
          <FormField label="Day">
            <ComboBox  onChange={this.handleDayChange.bind(this)} name="day" options={[
              {value: "Monday", selected: this.state.day === 'Monday'},
              {value: "Tuesday", selected: this.state.day === 'Tuesday'},
              {value: "Wednesday", selected: this.state.day === 'Wednesday'},
              {value: "Thursday", selected: this.state.day === 'Thursday'},
              {value: "Friday", selected: this.state.day === 'Friday'},
              {value: "Saturday", selected: this.state.day === 'Saturday'},
              {value: "Sunday", selected: this.state.day === 'Sunday'},
            ]}/>
          </FormField>
          {this.state.livePokerGames.map((item, i) => (
              <LivePokerGame key = {i} 
                type={item.type }
                address={item.address }
                buyIn={item.buyIn  }
                date={item.date }
                time={item.time }
                day={item.day}
                
              />
        ))}
        {this.state.limit <= this.state.livePokerGames.length?
          <Button
            fullWidth={true}
            onClick={this.loadMorePokerGames.bind(this)}>
            Load More
          </Button> : null}
        
        </div>
      )
    } else {
      return <p> Loading...</p>
    }
  }

}
export default LivePokerGames
