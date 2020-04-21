import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageHome from './components/PageHome'
import PageThread from './components/PageThread'
import PageNotFound from './components/PageNotFound'
import { createMuiTheme } from '@material-ui/core'

const App = () => {
  const theme = createMuiTheme()

  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path={'/'}>
              <PageHome />
            </Route>
            <Route exact path={'/threads/:threadId'}>
              <PageThread />
            </Route>
            <Route path={'*'}>
              <PageNotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
