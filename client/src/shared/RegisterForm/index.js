import React from "react"
import { Link } from 'react-router-dom'
import Input from '../Input'
import Button from '../Button'
import Form from '../Form'
import Message from '../Message'
import FormTitle from '../FormTitle'
import axios from 'axios'



class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      message: null,
      success: false
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

  validatePassword() {
    const password = this.state.password
    let passwordIsValid = false
    let hasNumber = false

    for (let i = 0; i < password.length; i++) {
      if (!isNaN(parseInt(password[i], 10))) {
        hasNumber = true
        break
      }
    }
    if (password.length > 7 && hasNumber) {
      passwordIsValid = true
    }

    return passwordIsValid
}

  handleSubmit = event => {
    event.preventDefault()
    this.setState({message: null, success: false})

    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }

    if (this.state.password !== this.state.confirm_password) {
      this.setState({message: {
        type: "error",
        message: "Passwords do not match"
      }})
      return
    }

    if (!this.validatePassword()) {
      this.setState({message: {
        type: "error",
        message: "Password must contain at least 8 characters and contain 1 or more numbers"
      }})
      return
    }

    axios.post('/api/register', user)
      .then(res => {
        this.setState({success: true})
      })
      .catch((error, msg) => {
        this.setState({message: {type: "error", message: "User already Exists" }})
      })
  }


  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          {this.state.message?
            <Message type="error">{this.state.message.message}</Message>
              :
            null
          }
          {
            this.state.success?
              <Message type="success">Regitered. Click <Link to="/login">here</Link> to login.</Message>
                :
              null
          }
          <FormTitle>Sign Up</FormTitle>
          <Input
            type="text"
            label="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            required="true"
          />
          <Input
            type="email"
            label="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required="true"
          />
          <Input
            type="password"
            label="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required="true"
          />
          <Input
            type="password"
            label="Confirm Password"
            name="confirm_password"
            value={this.state.confirm_password}
            onChange={this.handleChange}
            required="true"
          />
          <Button type="submit" fullWidth>Register</Button>
        </Form>
      </div>
    );
  }
}

export default RegisterForm
