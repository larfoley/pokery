import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import mainTheme from '../styles/variables.js'
import axios from 'axios'

// Views
import Landing from '../views/Landing'
import Home from '../views/Home'
import AddSession from '../views/AddSession'
import Login from '../views/Login'
import FindAGame from '../views/FindAGame'
import Register from '../views/Register'
import Progress from '../views/Progress'
import SessionHistory from '../views/SessionHistory'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    // Update state in the case the user refreshes a protected route
    this.isLoggedIn((err, user) => {
      this.setState({ user })
    })
  }

  isLoggedIn(callback) {
    axios.get("/api/is-logged-in")
      .then(res => {
        callback(null, res.data.user);
      })
      .catch(err => callback(err))
  }

  logIn(username, password, callback) {
    axios.post("/api/login", {
      username: username,
      password: password
      })
      .then(res => {
        callback(null, res.data)
        this.setState({user: res.data})
      })
      .catch(err => {
        callback(err)
      })
  }

  addPokerSession(session, callback) {
    axios.post('/api/poker-sessions/add', {pokerSession: session})
      .then(res => {
        this.setState(prevState => {
          prevState.user.pokerSessions.push(session)
          callback(null, true)
          return prevState
        })
      })
      .catch(err => callback(err))
  }

  addPokerLocation(location, callback) {
    axios.post('/api/locations/add', {pokerLocation: location})
      .then(res => {
        this.setState(prevState => {
          prevState.user.pokerLocations.push({name: location})
          callback(null, res)
          return prevState
        })
      })
      .catch(err => {callback(err)})
  }

  render() {

    return (
      <Router>
        <ThemeProvider theme={mainTheme}>
          <div>

            <Route exact path="/" render={() => (
              !this.state.user?
                <Landing logIn={this.logIn.bind(this)}/> :
                <Redirect to="/home" />
            )}/>

            <Route path="/home" render={() => (
              !this.state.user?
                <Landing logIn={this.logIn.bind(this)}/> :
                <Home />
            )}/>

            <Route path="/progress" render={() => (
              !this.state.user?
                <Landing logIn={this.logIn.bind(this)}/> :
                <Progress/>
            )}/>

            <Route path="/login" render={() => (
              <Login logIn={this.logIn.bind(this)}/>
            )}/>

            <Route path="/register" component={Register}/>

            <Route path="/add-session" render={() => (
              !this.state.user?
                <Landing logIn={this.logIn.bind(this)}/> :
                <AddSession
                  user={this.state.user}
                  addSession={this.addPokerSession.bind(this)}
                  addPokerLocation={this.addPokerLocation.bind(this)}
                />
            )}/>

             <Route path="/find-a-game" render={() => <FindAGame /> }/>
             <Route path="/session-history" render={() => (
              !this.state.user?
                <Landing logIn={this.logIn.bind(this)}/> :
                <SessionHistory/>
            )}/>
          </div>
        </ThemeProvider>
      </Router>
    );
  }

}

export default App;
