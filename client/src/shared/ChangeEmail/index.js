import React from "react"
import Button from '../Button'
import Select from '../Select'
import Input from '../Input'

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
    window.alert("Email Updated")
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
<<<<<<< HEAD
					label="New Email"
=======
					label="Enter your new Email"          			
>>>>>>> 0295e45b69a7c8f6d33d35c0148e282808f83a6c
					onChange={this.handleChange}
				/>
				<Button type="submit">Update Email</Button>
			</form>
		)
  }
}

export default ChangeEmail
