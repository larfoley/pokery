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
      email: "",
	  emailNew: "",

    };
  } 
  
    validateForm() {
    this.state.email.length>6 && this.state.email==this.state.emailNew;
  }
  
	render() {
		return (
			<div>
				
				<Form method="post" action="/register">

					<FormField >
						<Input type="email" placeholder="New Email" value={this.state.email} />
					</FormField>
					
					<FormField >
						<Input type="email" placeholder="Confirm new Email" value={this.state.emailNew} />
					</FormField>

					<Button type="submit" fullWidth>Update</Button>

				</Form>

			</div>
	    );
	}
}


