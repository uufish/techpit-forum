import { firestore } from 'firebase/app'
import React, { useEffect, useState } from 'react'
import { collectionData } from 'rxfire/firestore'
import CardResponse from './CardResponse'
import FormResponse from './FormResponse'
import Progress from './Progress'

const PageThread = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true)

  const [responses, setResponses] = useState([])

  const query = firestore()
    .collection('threads')
    .doc(match.params.threadId)
    .collection('responses')
    .orderBy('createdAt', 'asc')

  useEffect(() => {
    const subscription = collectionData(query, 'id').subscribe(data => {
      setIsLoading(false)
      setResponses(data)
    })
    return () => subscription.unsubscribe()
  }, [])

  return (
    <>
      <h1>Thread</h1>
      {responses.map(response => (
        <CardResponse key={response.id} response={response} />
      ))}
      {isLoading && <Progress />}
      <FormResponse threadId={match.params.threadId} />
    </>
  )
}

export default PageThread
