import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBNYnIYxbaF3BAA32HHd9JDNfzRExwTEuc',
  authDomain: 'net-ninja-marioplan2.firebaseapp.com',
  databaseURL: 'https://net-ninja-marioplan2.firebaseio.com',
  projectId: 'net-ninja-marioplan2',
  storageBucket: 'net-ninja-marioplan2.appspot.com',
  messagingSenderId: '842029471023'
}
firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
