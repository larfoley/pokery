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
import Settings from '../views/Settings'

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

  logout() {
    axios.get("/api/logout")
    .then(res => {
      this.setState(null)
      window.location.reload()
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
    axios.post('/api/poker-locations/add', {pokerLocation: location})
      .then(res => {
        this.setState(prevState => {
          prevState.user.pokerLocations.push(res.data.pop())
          callback(null, true)
          return prevState
        })
      })
      .catch(err => {callback(err)})
  }

  deleteLivePokerLocation(id, name, callback) {
    if (window.confirm(`
      Deleting this location will also delete all sessions associatied with this location.
      Are you sure you want to delete?
      `)) {
      axios.post('/api/poker-locations/delete', { id, name })
        .then(res => {
          this.setState(prevState => {
            prevState.user.pokerLocations = res.data
            callback(null, true)
            return prevState
          })
        })
        .catch(err => callback(err))
    }

  }

  editLivePokerLocation(id, newName, callback) {
    axios.post('/api/poker-locations/edit', {id, newName})
      .then(res => {
        this.setState(prevState => {
          prevState.user.pokerLocations = res.data
          return prevState
        });
        callback(null, true)
      })
      .catch(err => callback(err))
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
                <Home logout={this.logout.bind(this)}/>
            )}/>

            <Route path="/progress" render={() => (
              !this.state.user?
                <Landing logIn={this.logIn.bind(this)}/> :
                <Progress logout={this.logout.bind(this)}/>
            )}/>

            <Route path="/login" render={() => (
              !this.state.user?
               <Login logIn={this.logIn.bind(this)}/> :
               <Home logout={this.logout.bind(this)}/>
            )}/>

            <Route path="/register" component={Register}/>

            <Route path="/add-session" render={() => (
              !this.state.user?
                <Landing logIn={this.logIn.bind(this)}/> :
                <AddSession
                  user={this.state.user}
                  addSession={this.addPokerSession.bind(this)}
                  addPokerLocation={this.addPokerLocation.bind(this)}
                  deleteLivePokerLocation={this.deleteLivePokerLocation.bind(this)}
                  editLivePokerLocation={this.editLivePokerLocation.bind(this)}
                />
            )}/>

             <Route path="/find-a-game" render={() => <FindAGame /> }/>

             <Route path="/session-history" render={() => (
              !this.state.user?
                <Landing logIn={this.logIn.bind(this)}/> :
                <SessionHistory logout={this.logout.bind(this)}/>
            )}/>

            <Route path="/settings" render={() => (
             !this.state.user?
               <Landing logIn={this.logIn.bind(this)}/> :
               <Settings logout={this.logout.bind(this)}/>
           )}/>
          </div>
        </ThemeProvider>
      </Router>
    );
  }

}

export default App;
