import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import mainTheme from '../styles/variables.js'
import axios from 'axios'

// Components
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import PageContainer from './PageContainer'

// Views
import Landing from '../views/Landing'
import Home from '../views/Home'
import AddSession from '../views/AddSession'

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
              <div>
                <Header />
                <Sidebar />
                <PageContainer>
                  <Home />
                </PageContainer>
                <Footer />
              </div>
            )}/>

            <Route path="/add-session" render={() => (
              <div>
                <Header />
                <Sidebar />
                <PageContainer>
                  <AddSession user={this.state.user} />
                </PageContainer>
                <Footer />
              </div>
            )}/>

          </div>
        </ThemeProvider>
      </Router>
    );
  }

}

export default App;
