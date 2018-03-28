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
      password: "password",

      authenticated: false,
    };
  } 
  
    validateForm() {
    this.state.password.length > 0;
  }
  
	render() {
		return (
			<div>
				
				<Form method="post" action="/register">

					<FormField >
						<Input id="textInput" type="password" placeholder="New Password"/>
					</FormField>
					
					<FormField >
						<Input id="textInput" type="password" placeholder="Confirm new Password"/>
					</FormField>

					<Button type="submit" fullWidth>Update</Button>

				</Form>

			</div>
	    );
	}
}


