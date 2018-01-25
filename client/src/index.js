import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import 'normalize.css'
import styles from './styles/index.js'
import App from './App/index.js'
// import registerServiceWorker from './registerServiceWorker'

injectGlobal`
  ${styles}
`

ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker();
