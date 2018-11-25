import CssBaseline from '@material-ui/core/CssBaseline'
import { createGenerateClassName } from '@material-ui/styles'
import React, { Component } from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import AppRouter from './AppRouter'

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: false,
  productionPrefix: 'c'
})

class App extends Component {
  render() {
    return (
      <JssProvider generateClassName={generateClassName}>
        <>
          <CssBaseline />
          <AppRouter />
        </>
      </JssProvider>
    )
  }
}

export default App
