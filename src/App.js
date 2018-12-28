import CssBaseline from '@material-ui/core/CssBaseline'
import { createGenerateClassName, StylesProvider } from '@material-ui/styles'
import React from 'react'
import AppRouter from './components/AppRouter'

const generateClassName = createGenerateClassName({ productionPrefix: 'c' })

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <CssBaseline />
      <AppRouter />
    </StylesProvider>
  )
}

export default App
