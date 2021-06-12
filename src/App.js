import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import PageHome from './components/PageHome'
import PageNotFound from './components/PageNotFound'
import PageThread from './components/PageThread'

const App = () => {
  return (
    <ChakraProvider>
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
    </ChakraProvider>
  )
}

export default App
