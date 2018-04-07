import React from "react"
import Button from '../Button'
import Select from '../Select'
import Input from '../Input'

class ChangeEmail extends React.Component {
  	constructor() {
		super()
		this.state = {
			email: '',
			emailCheck: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	} 	
	handleSubmit(event) {
		event.preventDefault()
		if ((this.state.email.length > 6) && (this.state.email==this.state.emailCheck)){
			const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if (reg.test(this.state.email) === true){
               
			   console.log(this.state);
				window.alert("New email submitted")			
			} else {
				window.alert("Not a valid email address")
			}			
		} else {
			window.alert("Entered email addresses mismatch")
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
	
	render() {
		return (	
			<form onSubmit={this.handleSubmit}>
			
				<Input
					name="email"
					value={this.state.email}
					label="Enter your new Email"          			
					onChange={this.handleChange}
				/>
				<Input
					name="emailCheck"
					value={this.state.emailCheck}
					label="Retype New Email"
					onChange={this.handleChange}
				/>
				<Button type="submit">Update</Button>
			</form>
		)
  	}
}

export default ChangeEmail


