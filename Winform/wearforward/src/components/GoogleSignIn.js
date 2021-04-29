import React from 'react'
import firebase from 'firebase/app'

const auth = firebase.auth();

const GoogleSignIn  = () => {
    const googleLogIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return(
        <button onClick={googleLogIn}>Sign In with Google</button>
    )
}

export default GoogleSignIn;


