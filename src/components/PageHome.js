import { Heading, Spinner, HStack } from '@chakra-ui/react'
import firebase from 'firebase/app'
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import CardThread from './CardThread'
import FormThread from './FormThread'
import Main from './Main'

const PageHome = () => {
  const query = firebase
    .firestore()
    .collection('threads')
    .orderBy('updatedAt', 'desc')
    .limit(20)

  const [threads = [], loading] = useCollectionData(query, { idField: 'id' })

  return (
    <Main>
      <Heading>{'Home'}</Heading>
      <FormThread />
      {threads.map((thread) => (
        <CardThread key={thread.id} thread={thread} />
      ))}
      {loading && (
        <HStack justify={'center'}>
          <Spinner size={'xl'} />
        </HStack>
      )}
    </Main>
  )
}

export default PageHome
