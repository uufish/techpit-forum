import { firestore } from 'firebase/app'
import React from 'react'
import CardThread from './CardThread'
import FormThread from './FormThread'
import Progress from './Progress'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import AppMain from './AppMain'

const PageHome = () => {
  const query = firestore().collection('threads').orderBy('updatedAt', 'desc')

  const [threads = [], loading] = useCollectionData(query, { idField: 'id' })

  return (
    <AppMain>
      <h1>{'Home'}</h1>
      <FormThread />
      {threads.map((thread) => (
        <CardThread key={thread.id} thread={thread} />
      ))}
      {loading && <Progress />}
    </AppMain>
  )
}

export default PageHome
