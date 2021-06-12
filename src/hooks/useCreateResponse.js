import firebase from 'firebase/app'
import { useState } from 'react'

export const useCreateResponse = () => {
  const [isLoading, setLoading] = useState(false)

  const createResponse = async ({ text, threadId, username }) => {
    if (isLoading) return

    setLoading(true)

    const now = firebase.firestore.Timestamp.now()

    const threadRef = firebase.firestore().collection('threads').doc(threadId)

    await threadRef.update({
      responseCount: firebase.firestore.FieldValue.increment(1),
      updatedAt: now,
    })

    const responseRef = threadRef.collection('responses').doc()

    await responseRef.set({
      createdAt: now,
      updatedAt: now,
      text,
      threadId,
      username,
    })

    setLoading(false)
  }

  return [createResponse, isLoading]
}
