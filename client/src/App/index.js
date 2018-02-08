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

  isLoggedIn(callback) {
    axios.get("/api/is-logged-in")
      .then(res => {
        if (res.is_logged_in) {
          callback(true)
        } else {
          callback(false);
        }
      })
  }

  logIn(callback) {
    axios.post("/api/login", {
      username: this.state.username,
      password: this.state.password
      })
      .then(user => {
        if (user) {
          this.setState({ user })
        }
      })
      .catch(err => {
        this.setState({error: "error logining in"})
      })
  }

  render() {

    return (
      <Router>
        <ThemeProvider theme={mainTheme}>
          <div>

            <Route exact path="/" component={() => (
              <Landing logIn={this.logIn.bind(this)}/>
            )}/>

            {this.state.user? (

              <Route path="/home" render={() => (
                <div>
                  <Header />
                  <Sidebar />
                  <PageContainer>
                    <Home />
                  </PageContainer>
                  <Footer />
                </div>
              )}/>

            ) : (
              <Route path="*" render={() => (
                <div>Log in</div>
              )}/>
            )
            }

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
