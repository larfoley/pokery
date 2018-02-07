import React from "react"
import axios from 'axios'
import { Redirect } from 'react-router'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: ""
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
    axios.post("/api/login", {
      username: this.state.username,
      password: this.state.password
      })
      .then(res => {
      })
      .catch(err => {
        this.setState({error: "error logining in"})
      })
  }

  render() {
    return (
      <div>
        {this.state.error? <Redirect to="/" /> :

          <form onSubmit={this.handleSubmit}>
            <div id="username">
              <label>Username</label>
              <input
                name="username"
                autoFocus
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div id="password">
              <label>Password</label>
              <input
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </div>
            <button
              disabled={!this.validateForm()}
              type="submit"
              >
                Login
              </button>
            </form>
        }
      </div>
    );
  }
}

export default Login
