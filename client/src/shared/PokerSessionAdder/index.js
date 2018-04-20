import React from 'react'
import Input from "../Input"
import Button from "../Button"
import Select from "../Select"
import Text from "../Text"
import { NotificationManager } from 'react-notifications';

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
        date: this.getDate()
      }
    }
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.addSession(this.state.session, (err, result) => {
      if (!err) {
        NotificationManager.success("You have added a sesssion", "Session added")
      } else {
        console.log(err);
        NotificationManager.warning('Unable to add session ')
      }
    })
  }

  handleChange(event) {
    const session = this.state.session;
    session[event.target.name] = event.target.value;
    this.setState(session);
  }

  getDate() {
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if (day < 10) {
        day = '0'+ day
    }

    if (month < 10) {
        month = '0' + month
    }

    return year + '-' + month + '-' + day
  }

  render() {
    const locations = this.props.pokerLocations.map(location => location.name)

    return (

      locations.length > 0 ?

      <form onSubmit={this.onSubmit.bind(this)}>

        <Select
          label="Location"
          name="location"
          options={locations}
          value={this.state.session.location}
          onChange={this.handleChange.bind(this)}
          required="true"
        />
        <Select
          label="Variation"
          options={["Texas Hold'em", "Omaha"]}
          onChange={this.handleChange.bind(this)}
          name="variation"
          value={this.state.session.variation}
          required="true"
        />
        <Select
          label="Game Type"
          options={["Tournament (Re-Buy)", "Freezeout", "Cash Game"]}
          onChange={this.handleChange.bind(this)}
          name="gameType"
          value={this.state.session.gameType}
          required="true"
        />
        <Input
          label="Buy In"
          name="buyIn"
          type="number"
          value={this.state.session.name}
          onChange={this.handleChange.bind(this)}
          required="true"
        />
        <Input
          label="Amount Won"
          name="amountWon"
          type="number"
          value={this.state.session.name}
          onChange={this.handleChange.bind(this)}
          required="true"
        />

        <Input
          label="Date"
          name="date"
          type="date"
          value={this.state.session.date}
          onChange={this.handleChange.bind(this)}
          required="true"
        />

        <Button>Submit</Button>


      </form>

        :

      <Text>Before you can add a session you need to first add the name of a poker location that you play in so that we can track your progress in that location.</Text>

    )
  }
}

export default AddSessionForm
