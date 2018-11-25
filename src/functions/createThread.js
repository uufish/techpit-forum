import { firestore } from 'firebase/app'

export const createThread = async input => {
  const now = firestore.Timestamp.now()

  const systemFields = { createdAt: now, updatedAt: now }

  const threadRef = firestore()
    .collection('threads')
    .doc()

  await threadRef.set({
    ...systemFields,
    title: input.title,
    responseCount: 1
  })

  const responseRef = threadRef.collection('responses').doc()

  await responseRef.set({
    ...systemFields,
    threadId: threadRef.id,
    username: input.username,
    text: input.text,
    index: 0
  })
}
