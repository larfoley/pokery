import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import mainTheme from '../styles/variables.js'
import axios from 'axios'

// Components
import Header from './Header/index'
import Footer from './Footer/index'
import Sidebar from './Sidebar/index'
import PageContainer from './PageContainer/index'
import Banner from '../shared/Banner/index'
import Box from '../shared/Box/index'

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
            
              <Sidebar />
            <PageContainer>
            <Banner />
            <Box />
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              {/* Main Content Goes here */}
            </PageContainer>
            <Footer />
          </div>
        </ThemeProvider>
      </Router>
    );
  }

}

export default App;
