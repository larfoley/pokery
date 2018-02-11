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
      session: {id: 1},
      name: ""
    }
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.addSession(this.state.session)
    console.log(this.state.name);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <form ref={form => {this.form = form}} onSubmit={this.onSubmit.bind(this)}>

        <FormField label="Select Game">
          <ComboBox options={[
            {value: "one"},
            {value: "two"},
            {value: "three"}
          ]}/>
        </FormField>

        <FormField label="Earnings">
          <Input
            type="text"
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
