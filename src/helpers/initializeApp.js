import { firestore, initializeApp } from 'firebase/app'
import 'firebase/firestore'

initializeApp({
  apiKey: 'AIzaSyB9lTf0o7sl9FUfh7gexWRKeVR_MewXExA',
  authDomain: 'uzxeszyjuzny.firebaseapp.com',
  databaseURL: 'https://uzxeszyjuzny.firebaseio.com',
  projectId: 'uzxeszyjuzny',
  storageBucket: 'uzxeszyjuzny.appspot.com',
  messagingSenderId: '268923130736'
})

firestore().settings({ timestampsInSnapshots: true })

firestore()
  .enablePersistence({ experimentalTabSynchronization: true })
  .catch(err => {
    console.error(err)
  })