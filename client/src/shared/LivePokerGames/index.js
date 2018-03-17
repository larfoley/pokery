import React, { Component } from "react"

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
      loading: true,
      disableLoadMoreButton: props.disableLoadMoreButton,
      limit: props.limit? props.limit : 15,
      resultsCount: props.limit? props.limit : 15,
      day : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()],
    }
  }

  componentWillMount() {
    axios.get(`/api/live-poker-timetables?day=${this.state.day}`)
      .then(response => {
        let livePokerGames = response.data;
        this.setState({ livePokerGames , loading: false})
      })
      .catch(error => console.log(error));
  }

  handleDayChange(event) {
    this.setState({loading: true, day: event.target.value})
    axios.get(`/api/live-poker-timetables?day=${event.target.value}`)
      .then(response => {
        let livePokerGames = response.data;
        this.setState({ livePokerGames, loading: false })
      })
      .catch(error => console.log(error));
  }

  loadMorePokerGames() {
    this.setState({loading: true});
    this.setState({
      limit: this.state.limit + this.state.resultsCount,
      loading: false
    });
  }

  render() {
    const livePokerGames = this.state.livePokerGames
      .filter((game, i) => i < this.state.limit? true : false);

    return (
      <div>
        <FormField>
          <ComboBox selected={this.state.day} onChange={this.handleDayChange.bind(this)} name="day" options={[
            {value: "Monday"},
            {value: "Tuesday"},
            {value: "Wednesday"},
            {value: "Thursday"},
            {value: "Friday"},
            {value: "Saturday"},
            {value: "Sunday"},
          ]}/>
        </FormField>
        {!this.state.loading?
          <div>
            <h5>Games Found: {this.state.livePokerGames.length}</h5>
            {livePokerGames.map((item, i) => (
              <LivePokerGame key = {i}
                type={item.type }
                address={item.address }
                buyIn={item.buyIn  }
                date={item.date }
                time={item.time }
                day={item.day}

              />
            ))}
          </div> :
          <p>Loading...</p>
        }
      {this.state.limit <= this.state.livePokerGames.length && !this.state.disableLoadMoreButton?
        <Button
          onClick={this.loadMorePokerGames.bind(this)}>
          Load More
        </Button> : null}

      </div>
    )

  }

}
export default LivePokerGames
