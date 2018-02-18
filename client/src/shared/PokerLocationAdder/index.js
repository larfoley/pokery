import React from 'react'
// import styled from 'styled-components'
// import axios from 'axios'
import FontAwesome from "react-fontawesome"
import Input from "./Input"
import Submit from "./Submit"


class PokerLocationAdder extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      location: "",
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    e.target.reset()
    this.props.addPokerLocation(this.state.location, (err, res) => {
      if(!err) {
        window.alert("Location added")
      } else {
        window.alert("Error adding location")
      }
    })
  }

  handleChange(event) {
    this.setState({location: event.target.value});
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
