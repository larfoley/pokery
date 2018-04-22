import React from "react"
import Button from '../Button'
import Input from '../Input'
import { NotificationManager } from 'react-notifications';

class ChangeEmail extends React.Component {

  constructor() {
  	super()
  	this.state = {
  		email: '',
  	};
  	this.handleSubmit = this.handleSubmit.bind(this)
  	this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		
			NotificationManager.success('Email Updated')		
		
	}

	handleChange(event) {
		const name = event.target.name
		const value = event.target.value
		this.setState(prevState => {
			prevState[name] = value
			return prevState
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Input
          type="email"
					name="email"
					value={this.state.email}
					label="New Email"
					onChange={this.handleChange}
					required
					autoFocus
				/>
				<Button type="submit">Update Email</Button>
			</form>
		)
  }
}

export default ChangeEmail
