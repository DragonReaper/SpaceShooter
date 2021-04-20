import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAdAffaNgVuCFZyYDuWs1coSKGwX3cteYA",
    authDomain: "wearforward-website.firebaseapp.com",
    projectId: "wearforward-website",
    storageBucket: "wearforward-website.appspot.com",
    messagingSenderId: "89074239443",
    appId: "1:89074239443:web:d3fc3775fbf7363401d126",
    measurementId: "G-N19KJNHNSQ"
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
}

function SignOut(){
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;
