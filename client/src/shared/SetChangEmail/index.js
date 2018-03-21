import React from "react"
import { Redirect } from 'react-router'
import Input from '../Input'
import Button from '../Button'
import FormField from '../FormField'
import Form from '../Form'


class SetChangEmail extends React.Component {
	
    constructor(props) {
    super(props);

    this.state = {
      username: "admin",

      authenticated: false,
    };
  } 
  
    validateForm() {
    return this.state.username.length > 0;
  }
  
	render() {
		return (
			<div>
				
				<Form method="post" action="/register">

					<FormField >
						<Input type="email" placeholder="New Email"/>
					</FormField>
					
					<FormField >
						<Input type="email" placeholder="Confirm new Email"/>
					</FormField>

					<Button type="submit" fullWidth>Update</Button>

				</Form>

			</div>
	    );
	}
}


