import React from "react"
import { Redirect } from 'react-router'
import Input from '../Input'
import Button from '../Button'
import Text from '../Text'
import Link from '../Link'
import Form from '../Form'
import Message from '../Message'
import FormTitle from '../FormTitle'

class LoginForm extends React.Component {
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
    this.setState({error: ""})
    this.props.logIn(this.state.username, this.state.password, (err, user) => {
      if (err) {
        this.setState({error: "You have entered an invalid username or password" })
      }
      // if (user) {
      //   this.setState({authenticated: true})
      // }
    })
  }

  render() {
    return (
      <div>
        {this.state.authenticated? <Redirect to="/home" /> :

        <Form onSubmit={this.handleSubmit}>
          <FormTitle>Login</FormTitle>
          {this.state.error? <Message type="error">{this.state.error}</Message> : null}
          <Input
            name="username"
            label="Username"
            autoFocus
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <Input
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />

          <Button type="submit" fullWidth>Login</Button>

          <Text color="black" align="center" size=".8em">
            Not Registered?&nbsp;
            <Link to="/register" color="black">Create an account </Link>
          </Text>

        </Form>
        }
      </div>
    );
  }
}

export default LoginForm
