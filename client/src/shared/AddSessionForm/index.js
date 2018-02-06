import React from 'react'
// import styled from 'styled-components'
// import axios from 'axios'

class AddSessionForm extends React.Component {

  constructor() {
    super()
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault()
    console.log(this.earningsInput.value);
    // axios.get('/api/user/')
    //   .then(res => {
    //
    //   })
  }

  render() {

    return (
      <form ref={form => {this.form = form}} onSubmit={this.onSubmit.bind(this)}>
        <label>Select a Game</label>
        <select>
          <option>Green Room</option>
        </select>
        <label>Earnings</label>
        <input ref={input => {this.earningsInput = input}} />
        <input type="submit"/>
      </form>
    )
  }
}

export default AddSessionForm
