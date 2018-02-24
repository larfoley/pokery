import React from 'react'
// import styled from 'styled-components'
// import axios from 'axios'
import FormField from "../FormField"
import Input from "../Input"
import ComboBox from "../ComboBox"
import Button from "../Button"

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
    console.log(session);
    console.log("name", event.target.name);
    this.setState(session);
  }

  render() {
    const locations = this.props.pokerLocations.map(location => ({value: location.name}));
    return (
      <form ref={form => {this.form = form}} onSubmit={this.onSubmit.bind(this)}>

        <FormField label="Location">
          <ComboBox onChange={this.handleChange.bind(this)} name="locations" options={locations}/>
        </FormField>

        <FormField label="Game Variation">
          <ComboBox onChange={this.handleChange.bind(this)} name="gameVariation" options={[
            {value: "Texas Hold'em "},
            {value: "Cash Game"}
          ]}/>
        </FormField>

        <FormField label="Game Type">
          <ComboBox onChange={this.handleChange.bind(this)} name="gameType" options={[
            {value: "Tournament (Re-Buy)"},
            {value: "Frezeout"},
            {value: "Cash Game"}
          ]}/>
        </FormField>

        <FormField label="Buy In">
          <Input
            name="buyIn"
            type="number"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
          />
        </FormField>

        <FormField label="Amount Won (Excluding Buy In)">
          <Input
            name="amountWon"
            type="number"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
          />
        </FormField>

        <FormField>
          <Button>Submit</Button>
        </FormField>

      </form>
    )
  }
}

export default AddSessionForm
