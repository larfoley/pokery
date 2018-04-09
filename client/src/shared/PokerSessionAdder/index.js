import React from 'react'
import Input from "../Input"
import Button from "../Button"
import Select from "../Select"
import Text from "../Text"

class AddSessionForm extends React.Component {

  constructor(props) {
    super(props)

    const locations = props.pokerLocations.map(location => location.name);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      session: {
        location: locations[0],
        variation: "texas holdem",
        gameType: "tournament",
        buyIn: 0,
        amountWon: 0,
        date: ""
      }
    }
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.addSession(this.state.session, (err, result) => {
      if (!err) {
        window.alert("Session added")
        console.log(result);
      } else {
        console.log(err);
        window.alert('Unable to add session ')
      }
    })
  }

  handleChange(event) {
    const session = this.state.session;
    session[event.target.name] = event.target.value;
    this.setState(session);
  }

  render() {

    const locations = this.props.pokerLocations.map(location => location.name)

    return (

      locations.length > 0 ?

      <form ref={form => {this.form = form}} onSubmit={this.onSubmit.bind(this)}>

        <Select
          label="Location"
          name="location"
          options={locations}
          value={this.state.location}
          onChange={this.handleChange.bind(this)}
        />
        <Select
          label="Variation"
          options={["Texas Hold'em", "Omaha"]}
          onChange={this.handleChange.bind(this)}
          name="variation"
          value={this.state.variation}
        />
        <Select
          label="Game Type"
          options={["Tournament (Re-Buy)", "Frezeout", "Cash Game"]}
          onChange={this.handleChange.bind(this)}
          name="gameType"
          value={this.state.gameType}
        />
        <Input
          label="Buy In"
          name="buyIn"
          type="number"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
        />
        <Input
          label="Amount Won"
          name="amountWon"
          type="number"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
        />

        <Input
          label="Date"
          name="date"
          type="date"
          value={this.state.date}
          onChange={this.handleChange.bind(this)}
        />

        <Button>Submit</Button>


      </form>

        :

      <Text>Before you can add a session you need to first add the name of a poker location that you play in so that we can track your progress in that location.</Text>

    )
  }
}

export default AddSessionForm
