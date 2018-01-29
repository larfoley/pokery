import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import mainTheme from '../styles/variables.js'
import axios from 'axios'
import { Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-oldschool-dark'

// Components
import Header from './Header/index'
import Footer from './Footer/index'
import Sidebar from './Sidebar/index'
import PageContainer from './PageContainer/index'
import Alert from '../shared/Notifications/Alert'

// Views
import Home from '../views/Home/index'
import About from '../views/About/index'

const options = {
  timeout: 5000,
  position: 'top center',

}

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
          <Provider template={AlertTemplate} {...options} >
            <div>
              <Header />
                <Sidebar />
              <PageContainer>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                {/* Main Content Goes here */}
              </PageContainer>
              <Footer />
            </div>
          </Provider>            
        </ThemeProvider>
      </Router>
    );
  }

}

export default App;
