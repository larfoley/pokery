import React from 'react'
import Select from '../Select'
import Button from '../Button'
import axios from 'axios'
import { NotificationManager } from 'react-notifications';

class Preferences extends React.Component {
  constructor() {
    super()
    this.state = {
      theme: "light",
      currency: "euro",
      preferedPokerVariation: "Texas Hold'em",
      preferedPokerGameType: "Tournament",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    axios.get('/api/update-preferences').then(res => {
      if (res) { 
        const {theme, currency, preferedPokerVariation,preferedPokerGameType} = res.data
        this.setState({theme, currency, preferedPokerVariation,preferedPokerGameType})          
      }
     }).catch(console.error)
  }

  handleSubmit(event) {
    // Prevent the browser from submitting the form
    event.preventDefault()
    this.props.updateUserPreferences(this.state, (err, res) => {
      if (!err) {
        NotificationManager.success('Preferences Updated')
      } else {
        NotificationManager.error('Error updating preferences')
        console.log(err)
      }
    })
  }

  handleChange(event) {
    // When the user changes the value of a input we need to
    // update the component state

    // Get the name of the input that the user has changed
    const name = event.target.name
    // Get the value of the input that the user has changed
    const value = event.target.value

    // Update the components state
    this.setState(prevState => {
      prevState[name] = value
      return prevState
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Select
          name="theme"
          value={this.state.theme}
          label="Theme"
          options={["light", "dark"]}
          onChange={this.handleChange}
        />
        <Select
          name="currency"
          value={this.state.currency}
          label="Currency"
          options={["Euro"]}
          onChange={this.handleChange}
        />
        <Select
          name="preferedPokerVariation"
          value={this.state.preferedPokerVariation}
          label="Prefered Poker Variation"
          options={["Texas Hold'Em", "Omaha"]}
          onChange={this.handleChange}
        />
        <Select
          name="preferedPokerGameType"
          value={this.state.preferedPokerGameType}
          label="Prefered Game Type"
          options={["Tournament", "Cash Game", "Freezeout"]}
          onChange={this.handleChange}
        />
        <Button type="submit">Update Preferences</Button>
      </form>
    )
  }
}

export default Preferences
