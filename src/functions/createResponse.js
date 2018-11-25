import { firestore } from 'firebase/app'

export const createResponse = async input => {
  const now = firestore.Timestamp.now()

  const system = { createdAt: now, updatedAt: now }

  const threadRef = firestore()
    .collection('threads')
    .doc(input.threadId)

  const threadResponseRef = firestore()
    .collection('threads')
    .doc(input.threadId)
    .collection('responses')
    .doc()

  await firestore().runTransaction(async t => {
    const thread = await t.get(threadRef)

    if (!thread.exists) {
      throw new Error('thread not found')
    }

    t.update(threadRef, {
      responseCount: thread.data().responseCount + 1,
      updatedAt: now
    })

    t.set(threadResponseRef, {
      ...system,
      threadId: input.threadId,
      username: input.username,
      text: input.text,
      index: thread.data().responseCount
    })
  })
}
