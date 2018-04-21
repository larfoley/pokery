import React from "react"
import Button from '../Button'
import Input from '../Input'
import axios from 'axios'
import { NotificationManager } from 'react-notifications';

class ChangePassword extends React.Component {
  constructor() {
    super()
    this.state = {
    	password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
	}

  handleSubmit(event) {
    event.preventDefault()

    const password = this.state.password

  	if (this.validateUserInput()) {
      axios.post('/api/change-password', {password: password})
        .then(res => {
          NotificationManager.success('Password updated')

        })
        .catch(err => {
          NotificationManager.error(err, "Unable to update password. Try again later.")
 
          console.log(err);
        })
    }
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState(prevState => {
      prevState[name] = value
      return prevState
    })

  }

  validateUserInput() {
    const password = this.state.password

    if (password.trim().length < 5) {
      window.alert("Your password must have at least 5 characters")
      return false
    }

    return true
  }

  render() {
  	return (
  		<form onSubmit={this.handleSubmit}>
  			<Input
      		name="password"
          type="password"
      		value={this.state.password}
      		label="New Password"
      		onChange={this.handleChange}
          autoComplete="off"
      	/>
  			<Button type="submit">Update Password</Button>
  		</form>
    )
   }
}

export default ChangePassword
