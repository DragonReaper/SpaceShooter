import React from 'react'
import firebase from 'firebase/app'

const auth = firebase.auth();

const FacebookSignIn = () => {
    const facebookLogIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider);
    }
    return(
        <button onClick={facebookLogIn}>Sign In with Facebook</button>
    )
}

export default FacebookSignIn;
