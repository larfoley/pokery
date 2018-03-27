import React from "react"
// import { Redirect } from 'react-router'
import Input from '../Input'
import Button from '../Button'
import Form from '../Form'
import axios from 'axios'


class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
      },
      registrationSuccesfull: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
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

    axios.post('/api/register', this.state.user)
      .then(res => {
        console.log("regiter response", res);
      })
  }

  render() {
    return (
      <div>
      	<Form onSubmit={this.handleSubmit}>
          <Input type="text" placeholder="Username"/>
          <Input type="email" placeholder="Email"/>
          <Input type="password" placeholder="Password"/>
          <Button type="submit" fullWidth>Register</Button>
      	</Form>
      </div>
    );
  }
}

export default RegisterForm
