import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import 'normalize.css'
import styles from './styles/index.js'
import App from './App/index.js'
import registerServiceWorker from './registerServiceWorker'
// import axios from 'axios'

injectGlobal`
  ${styles}
`

const mockUser = {
  username: "bob",
  sessions: [
    {
      earnings: 100
    },
    {
      earnings: 250
    }
  ]
}


ReactDOM.render(<App user={mockUser} />, document.getElementById('root'))

if (process.env.ENVOIREMENT === "production") {
  registerServiceWorker();
}
