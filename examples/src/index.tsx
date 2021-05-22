import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApplyTheme } from '@viniciushaddad/react-ui'

ReactDOM.render(
  <React.StrictMode>
    <ApplyTheme>
      <App />
    </ApplyTheme>
  </React.StrictMode>,
  document.getElementById('root'),
)
