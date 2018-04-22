import React, { Component } from "react"
import LivePokerGame from "./LivePokerGame"
import Select from "../Select"
import axios from "axios"
import Button from "../Button"
import Loading from "../Loading"
import Align from "../Align"
import Title from "./Title"

class LivePokerGames extends Component {

  constructor(props){
    super(props);
    this.state = {
      countryIsSupported: true,
      country: "",
      livePokerGames: [],
      filteredLivePokerGames: [],
      filter: false,
      loading: true,
      disableLoadMoreButton: props.disableLoadMoreButton,
      limit: props.limit? props.limit : 15,
      resultsCount: props.limit? props.limit : 15,
      casino: "",
      casinos: ["Any"],
      day : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()],
    }
  }

  componentWillMount() {
    let country, livePokerGames, casinos

    this.setState({loading: true})

    axios.get('/api/get-location')
      .then(res => {
         country = res.data.country.en
        return axios.get(`/api/live-poker-timetables?day=${this.state.day}&country=${country}`)
      })
      .then((res) => {
        livePokerGames = res.data
        console.log('live', res.data);

        return axios.get(`/api/casinos?country=${country}`)
      })
      .then(res => {
        casinos = res.data
      })
      .then(res => {
        this.setState(prevState => {
          prevState.casinos = casinos
          prevState.casinos.unshift('Any')
          prevState.livePokerGames = livePokerGames
          prevState.country = country
          prevState.casinos = casinos
          prevState.loading = false
          return prevState
        })
      })
      .catch(err => {
        console.log(err);
        if (err.status === 400) {
          this.setState({countryIsSupported: false})
        }
      })

  }

  handleDayChange(event) {
    const country = this.state.country
    this.setState({loading: true, day: event.target.value})

    axios.get(`/api/live-poker-timetables?day=${event.target.value}&country=${country}`)
      .then(response => {
        let livePokerGames = response.data;
        this.setState({ livePokerGames, loading: false })
      })
      .catch(error => {
        console.log(error)
        this.setState({countryIsSupported: false})
        }
      )
  }

  handleFilterCasino(event) {
    const casino = event.target.value

    if (casino && casino !== "Any") {
      this.setState(prevState => {
        prevState.filter = true
        prevState.filteredLivePokerGames = prevState.livePokerGames
        .filter(game => game.address.toLowerCase().includes(casino))
        return prevState
      })
    }

    if (casino === "Any") {
      this.setState({filter: false})
    }
  }

  loadMorePokerGames() {
    // this.setState({loading: true});
    this.setState({
      limit: this.state.limit + this.state.resultsCount,
      loading: false
    });
  }

  render() {
    const livePokerGames = this.state.filter?

      this.state.filteredLivePokerGames
      .filter((game, i) => i < this.state.limit? true : false)
        :
      this.state.livePokerGames
      .filter((game, i) => i < this.state.limit? true : false)

    return (
      <div>

          {
            this.state.countryIsSupported?
              <div>
                <Select
                  selected={this.state.day}
                  onChange={this.handleDayChange.bind(this)}
                  name="day"
                  value={this.state.day}
                  label="Select Day"
                  options={[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ]}/>

                <Select
                  onChange={this.handleFilterCasino.bind(this)}
                  name="casino"
                  label="Select Casino"
                  options={this.state.casinos}/>

              {!this.state.loading?
                <div>
                  <Title>Games Found: {livePokerGames.length}</Title>
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
                <Align to="center">
                  <Loading />
                </Align>

              }
            {this.state.limit <= this.state.livePokerGames.length && !this.state.disableLoadMoreButton?
              <Button
                onClick={this.loadMorePokerGames.bind(this)}>
                Load More
              </Button> : null}
              </div>
                :
              <h2>This feature is not supported in you country</h2>
          }

      </div>
    )

  }

}
export default LivePokerGames
