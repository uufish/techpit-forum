import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppContent from './components/AppContent'
import AppHeader from './components/AppHeader'
import PageHome from './pages/PageHome'
import PageNotFound from './pages/PageNotFound'
import PageThread from './pages/PageThread'

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <AppHeader />
          <AppContent>
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route exact path="/threads/:threadId" component={PageThread} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </AppContent>
        </>
      </BrowserRouter>
    )
  }
}

export default AppRouter
