import React from "react"
import { Redirect } from 'react-router'

class Login extends React.Component {
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
