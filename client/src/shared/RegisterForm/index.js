import React from "react"
import { Redirect } from 'react-router'
import Input from '../Input'
import Button from '../Button'
import Form from '../Form'
import axios from 'axios'


class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
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
    })
  }

  handleSubmit = event => {
    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    event.preventDefault()

    axios.post('/api/register', user)
      .then(res => {
        this.setState({registrationSuccesfull: true})
      })
  }

  render() {
    return (
      <div>
        {
          this.state.registrationSuccesfull ?

            <Redirect to="/login" /> :

            <Form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Button type="submit" fullWidth>Register</Button>
            </Form>
        }

      </div>
    );
  }
}

export default RegisterForm
