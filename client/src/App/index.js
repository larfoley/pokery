import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import mainTheme from '../styles/theme.js'
import axios from 'axios'

// Components
import Header from './Header/index'
import Footer from './Footer/index'

// Views
import Home from '../views/Home/index'
import About from '../views/About/index'

class App extends Component {
  
  componentDidMount() {
    axios.get('/profile')
      .then(res => console.log(res.data))
      .catch(res => console.log(res))
  }

  render() {
    return (
      <Router>
        <ThemeProvider theme={mainTheme}>
          <div>
            <Header />
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            <div>
              {/* Main Content Goes here */}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </Router>
    );
  }

}

export default App;
