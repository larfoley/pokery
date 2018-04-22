import React from 'react'
// import styled from 'styled-components'
// import axios from 'axios'
import FontAwesome from "react-fontawesome"
import Input from "./Input"
import Submit from "./Submit"
import { NotificationManager } from 'react-notifications';


class PokerLocationAdder extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      location: "",
      error: null
    }
  }

  handleChange(event) {
    this.setState({location: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault()
    e.target.reset()
    if (!this.validateUserInput(this.state.location.trim())) {
      return
    }
    this.props.addPokerLocation(this.state.location, (err) => {
      if(!err) {
        NotificationManager.success('Location Added')
      } else {
        NotificationManager.error("The poker location could not be added. Try again later.")
        console.log("Error", err);
      }
    })
  }

  validateUserInput(input) {
    const maxChars = 100
    if (input.length > maxChars) {
      NotificationManager.warning(`A Location can not have more than ${maxChars} characters`)
      return false
    } else if (input.length < 1) {
      NotificationManager.warning(`Please enter a location`)
      return false
    } else {
      return true
    }
  } 


  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Submit>
          <FontAwesome name="plus"/> New Location
        </Submit>
        <Input
          placeholder="eg. Merrion Casino"
          onChange={this.handleChange.bind(this)}
        />
      </form>
    )
  }
}

export default PokerLocationAdder
