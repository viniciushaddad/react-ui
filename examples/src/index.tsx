import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { applyTheme, GlobalStyles } from '@viniciushaddad/react-ui'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={applyTheme({})}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
