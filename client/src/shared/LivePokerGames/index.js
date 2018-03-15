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
      day : ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][new Date().getDay()]
    }
  }

  componentWillMount() {
    axios.get('/api/live-poker-timetables')
    .then(response => {  
      this.setState({ livePokerGames: response.data
        .filter(game => this.state.day === game.day.toLowerCase())
        .filter((game, i) => i < this.state.limit? true : false)})
    })

    .catch(function (error) {
      console.log(error);
    })
  }

  handleDayChange(event) {
    this.setState({day: event.target.value});
    this.forceUpdate();
  }

  loadMorePokerGames() {
    this.setState({limit: this.state.limit + 15});
  }
  
  render() {

    if (this.state.livePokerGames.length > 0 ) {
      return (
     
        <div>
          <FormField label="Day">
            <ComboBox  onChange={this.handleDayChange.bind(this)} name="day" options={[
              {value: "monday", selected: this.state.day === 'monday'},
              {value: "tuesday", selected: this.state.day === 'tuesday'},
              {value: "wednesday", selected: this.state.day === 'wednesday'},
              {value: "thursday", selected: this.state.day === 'thursday'},
              {value: "friday", selected: this.state.day === 'friday'},
              {value: "saturday", selected: this.state.day === 'saturday'},
              {value: "sunday", selected: this.state.day === 'sunday'},
            ]}/>
          </FormField>
          {this.state.livePokerGames.map((item, i) => (
              <LivePokerGame key = {i} 
                type={item.type }
                address={item.address }
                buyIn={item.buyIn  }
                date={item.date }
                time={item.time }
                day={item.day  }
                
              />
        ))}
        <Button fullWidth={true} onClick={this.loadMorePokerGames.bind(this)}>Load More</Button>
        </div>
      )
    } else {
      return <p> Loading...</p>
    }
  
    }

}
export default LivePokerGames
