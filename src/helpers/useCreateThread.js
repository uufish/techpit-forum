import { firestore } from 'firebase/app'
import { useState } from 'react'

export const useCreateThread = () => {
  const [loading, setLoading] = useState(false)

  const createResponse = async ({ text, title, username }) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()

    const threadRef = firestore().collection('threads').doc()

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

  return [createResponse, loading]
}
