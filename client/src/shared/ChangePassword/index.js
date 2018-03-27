import React from "react"
import Button from '../Button'
import Select from '../Select'


class ChangePassword extends React.Component {
  	constructor() {
		super()
		this.state = {
			password: '',
			passwordCheck: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this)
	} 
	
handleSubmit(event) {
    event.preventDefault()
	if ((this.state.password.length > 0) && (this.state.password==this.state.passwordCheck)){
    	console.log(this.state);
    	window.alert("Form Submitted")
	} else {
		window.alert("New password mismatch")
	}
}
  
render() {
	return (
		<form onSubmit={this.handleSubmit}>
		
			<Select
         		name="password"
          		value={this.state.password}
          		label="New Password"          			
          		onChange={this.handleChange}
       		/>
        	<Select
         		name="passwordCheck"
          		value={this.state.passwordCheck}
         		label="Retype New Password"
		  		onChange={this.handleChange}
   			/>
			<Button type="submit">Update</Button>
		</form>
    	)
  	}
}

export default ChangePassword


