import firebase from 'firebase/app'
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useParams } from 'react-router-dom'
import CardResponse from './CardResponse'
import FormResponse from './FormResponse'
import Main from './Main'
import { Heading, HStack, Spinner } from '@chakra-ui/react'

const PageThread = () => {
  const { threadId } = useParams()

  const query = firebase
    .firestore()
    .collection('threads')
    .doc(threadId)
    .collection('responses')
    .orderBy('createdAt', 'asc')

  const [responses = [], loading] = useCollectionData(query, { idField: 'id' })

  return (
    <Main>
      <Heading>{'スレッド'}</Heading>
      {responses.map((response, index) => (
        <CardResponse key={response.id} index={index} response={response} />
      ))}
      {loading && (
        <HStack justify={'center'}>
          <Spinner size={'xl'} />
        </HStack>
      )}
      <FormResponse threadId={threadId} />
    </Main>
  )
}

export default PageThread
