import React from "react"
import { Redirect } from 'react-router'
import Input from '../Input'
import Button from '../Button'
import Form from '../Form'

class RegForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "admin",
      password: "password",
      error: "",
      authenticated: false,
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.logIn(this.state.username, this.state.password, (err, user) => {
      // if (user) {
      //   this.setState({authenticated: true})
      // }
    })
  }

  render() {
    return (
      <div>
        {this.state.authenticated? <Redirect to="/home" /> :

        	<Form method="post" action="/register">
            <Input type="text" placeholder="Username"/>
            <Input type="email" placeholder="Email"/>
            <Input id="textInput" type="password" placeholder="Password"/>
            <Button type="submit" fullWidth>Register</Button>
        	</Form>

        }
      </div>
    );
  }
}

export default RegForm
