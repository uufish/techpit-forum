import { firestore } from 'firebase/app'

export const createResponse = async (input) => {
  const now = firestore.Timestamp.now()

  const threadRef = firestore().collection('threads').doc(input.threadId)

  await threadRef.update({
    responseCount: firestore.FieldValue.increment(1),
    updatedAt: now,
  })

  const threadResponse = threadRef.collection('responses').doc()

  await threadResponse.set({
    createdAt: now,
    updatedAt: now,
    threadId: input.threadId,
    username: input.username,
    text: input.text,
  })
}
