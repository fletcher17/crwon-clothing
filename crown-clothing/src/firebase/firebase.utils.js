import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDuROx-EnB6ffqYnQqaawYV75h6qGv6JYw",
    authDomain: "crwn-clothing-39e69.firebaseapp.com",
    databaseURL: "https://crwn-clothing-39e69.firebaseio.com",
    projectId: "crwn-clothing-39e69",
    storageBucket: "crwn-clothing-39e69.appspot.com",
    messagingSenderId: "730133873327",
    appId: "1:730133873327:web:e0958957780b0f72860a5a",
    measurementId: "G-CHPDSLMWT7" 
};


export const createUserProfileDocument = 
    async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if(!snapShot.exists) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set ({
                    displayName, email, createdAt, ...additionalData
                });
            } catch (error) {
                        console.log ('error creating user', error.message);
                    }
        }

    }
    

    firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account'});


    export const SignInWithGoogle = () => auth.signInWithPopup(provider);


   export default firebase