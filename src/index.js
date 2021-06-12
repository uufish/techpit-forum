import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyB9lTf0o7sl9FUfh7gexWRKeVR_MewXExA',
  authDomain: 'uzxeszyjuzny.firebaseapp.com',
  databaseURL: 'https://uzxeszyjuzny.firebaseio.com',
  projectId: 'uzxeszyjuzny',
  storageBucket: 'uzxeszyjuzny.appspot.com',
  messagingSenderId: '268923130736',
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
