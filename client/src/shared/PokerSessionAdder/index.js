import React from 'react'
import Input from "../Input"
import Button from "../Button"
import Select from "../Select"

class AddSessionForm extends React.Component {

  constructor() {
    super()
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      session: {
        location: "foo",
        variation: "texas holdem",
        gameType: "texas holdem",
        buyIn: 0,
        amountWon: 0,
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
    const locations = this.props.pokerLocations.map(location => location.name);

    return (

      <form ref={form => {this.form = form}} onSubmit={this.onSubmit.bind(this)}>

        <Select
          label="Location"
          options={locations}
        />
        <Select
          label="Variation"
          options={["Texas Hold'em", "Omaha"]}
          onChange={this.handleChange.bind(this)}
          name="variation"
        />
        <Select
          label="Game Type"
          options={["Tournament (Re-Buy)", "Frezeout", "Cash Game"]}
          onChange={this.handleChange.bind(this)}
          name="gameType"
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

        <Button>Submit</Button>


      </form>
    )
  }
}

export default AddSessionForm
