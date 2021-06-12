import firebase from 'firebase/app'
import { useState } from 'react'

export const useCreateThread = () => {
  const [isLoading, setLoading] = useState(false)

  const createResponse = async ({ text, title, username }) => {
    if (isLoading) return

    setLoading(true)

    const now = firebase.firestore.Timestamp.now()

    const threadRef = firebase.firestore().collection('threads').doc()

    await threadRef.set({
      createdAt: now,
      updatedAt: now,
      title,
      responseCount: 1,
    })

    const responseRef = threadRef.collection('responses').doc()

    await responseRef.set({
      createdAt: now,
      updatedAt: now,
      threadId: threadRef.id,
      username,
      text,
    })

    setLoading(false)
  }

  return [createResponse, isLoading]
}
