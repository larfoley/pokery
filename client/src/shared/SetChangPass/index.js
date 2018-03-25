import React from "react"
import { Redirect } from 'react-router'
import Input from '../Input'
import Button from '../Button'
import FormField from '../FormField'
import Form from '../Form'


class SetChangPass extends React.Component {


    constructor(props) {
    super(props);

    this.state = {
      password: '',
	  passwordCheck: '',

    };
  } 
  
  
    validateForm() {
    this.state.password.length > 0 && this.state.password==this.state.passwordCheck;
  }
  
	render() {
		return (
			<div>
				
				<Form method="post" action="/register">

					<FormField >
						<Input id="textInput" type="password" placeholder="New Password" value={this.state.password} />
					</FormField>
					
					<FormField >
						<Input id="textInput" type="password" placeholder="Confirm new Password" value={this.state.passwordNew} />
					</FormField>

					<Button type="submit" fullWidth>Update</Button>

				</Form>

			</div>
	    );
	}
}


