import { firestore } from 'firebase/app'

export const createThread = async (input) => {
  const now = firestore.Timestamp.now()

  const threadRef = firestore().collection('threads').doc()

  await threadRef.set({
    createdAt: now,
    updatedAt: now,
    title: input.title,
    responseCount: 1,
  })

  const responseRef = threadRef.collection('responses').doc()

  await responseRef.set({
    createdAt: now,
    updatedAt: now,
    threadId: threadRef.id,
    username: input.username,
    text: input.text,
  })
}
