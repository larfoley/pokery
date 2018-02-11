import React from 'react'
// import styled from 'styled-components'
// import axios from 'axios'
import FontAwesome from "react-fontawesome"
import Input from "./Input"
import Submit from "./Submit"


class AddPokerLocationForm extends React.Component {

  constructor() {
    super()
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      location: {id: 1},
      name: ""
    }
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.addPokerLocation(this.state.location)
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <form>
        <Submit><FontAwesome name="plus"/> New Location</Submit>
        <Input placeholder="eg. Merrion Casino"/>
      </form>
    )
  }
}

export default AddPokerLocationForm
