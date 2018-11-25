import { firestore } from 'firebase/app'
import React, { Component } from 'react'
import { collectionData } from 'rxfire/firestore'
import CardResponse from '../components/CardResponse'
import Progress from '../components/Progress'
import FormResponse from '../components/FormResponse'

class PageThread extends Component {
  subscription = null
  state = { isLoading: true, responses: [] }

  componentDidMount() {
    const { match } = this.props

    const query = firestore()
      .collection('threads')
      .doc(match.params.threadId)
      .collection('responses')
      .orderBy('createdAt', 'desc')

    this.subscription = collectionData(query, 'id').subscribe(responses => {
      this.setState({ isLoading: false, responses })
    })
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  render() {
    const { match } = this.props
    const { isLoading, responses } = this.state

    return (
      <>
        <h1>Thread</h1>
        <FormResponse threadId={match.params.threadId} />
        {responses.map(response => (
          <CardResponse key={response.id} response={response} />
        ))}
        {isLoading && <Progress />}
      </>
    )
  }
}

export default PageThread
