import { firestore } from 'firebase/app'
import React, { Component } from 'react'
import { collectionData } from 'rxfire/firestore'
import CardThread from '../components/CardThread'
import Progress from '../components/Progress'
import FormThread from '../components/FormThread'

class PageHome extends Component {
  subscription = null
  state = { isLoading: true, threads: [] }

  componentDidMount() {
    const query = firestore()
      .collection('threads')
      .orderBy('updatedAt', 'desc')

    this.subscription = collectionData(query, 'id').subscribe(threads => {
      this.setState({ isLoading: false, threads })
    })
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  render() {
    const { isLoading, threads } = this.state

    return (
      <>
        <h1>Home</h1>
        <FormThread />
        {threads.map(thread => (
          <CardThread key={thread.id} thread={thread} />
        ))}
        {isLoading && <Progress />}
      </>
    )
  }
}

export default PageHome
