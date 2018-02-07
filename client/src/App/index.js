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

  isLoggedIn() {
    return !!this.state.user
  }

  logIn(callback) {
    axios.post("/api/login", {
      username: this.state.username,
      password: this.state.password
      })
      .then(success => {
        if (success) {
          <Redirect to="/home" />
        }
      })
      .catch(err => {
        this.setState({error: "error logining in"})
      })
  }

  render() {
    var user = this.state.user

    return (
      <Router>
        <ThemeProvider theme={mainTheme}>
          <div>

            <Route exact path="/" component={Landing}/>

            <Route path="/home" render={() => (
              this.isLoggedIn()? (

                <div>
                  <Header />
                  <Sidebar />
                  <PageContainer>
                    <Home />
                  </PageContainer>
                  <Footer />
                </div>

              ) : (
                <Redirect to="/" />
              )
            )}/>

            <Route path="/add-session" render={() => (
              this.isLoggedIn()? (

                <div>
                  <Header />
                  <Sidebar />
                  <PageContainer>
                    <AddSession user={user} />
                  </PageContainer>
                  <Footer />
                </div>

              ) : (
                <Redirect to="/" />
              )
            )}/>

          </div>
        </ThemeProvider>
      </Router>
    );
  }

}

export default App;
