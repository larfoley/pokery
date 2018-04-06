import React from 'react'
import Select from '../Select'
import Button from '../Button'

class Preferences extends React.Component {
  constructor() {
    super()
    this.state = {
      theme: "light",
      currency: "euro",
      variation: "Texas Hold'em",
      gameType: "Tournament"
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    // Prevent the browser from submitting the form
    event.preventDefault()

    console.log(this.state);
    window.alert("Settings saved")
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
          label="Select your prefered theme:"
          options={["light", "dark"]}
          onChange={this.handleChange}
        />
        <Select
          name="currency"
          value={this.state.currency}
          label="Select your prefered currency denotation:"
          options={["Euro"]}
          onChange={this.handleChange}
        />
        <Select
          name="variation"
          value={this.state.variation}
          label="Select your prefered variation of game:"
          options={["Texas Hold'Em", "Omaha"]}
          onChange={this.handleChange}
        />
        <Select
          name="gameType"
          value={this.state.gameType}
          label="Select your prefered game type"
          options={["Tournament", "Cash Game", "Frezeout"]}
          onChange={this.handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    )
  }
}

export default Preferences
