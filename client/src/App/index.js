import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import mainTheme from '../styles/variables.js'

// Components
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import PageContainer from './PageContainer'

// Views
import Home from '../views/Home'
import About from '../views/About'
import AddSession from '../views/AddSession'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: props.user
    }
  }

  render() {
    var user = this.state.user

    return (
      <Router>
        <ThemeProvider theme={mainTheme}>
          <div>
            <Header />
            <Sidebar />
            <PageContainer>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/add-session" render={() => (
                <AddSession user={user} />
              )}/>
            </PageContainer>
            <Footer />
          </div>
        </ThemeProvider>
      </Router>
    );
  }

}

export default App;
