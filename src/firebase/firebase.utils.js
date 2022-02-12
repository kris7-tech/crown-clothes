import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =  {
    apiKey: "AIzaSyDlpk-Fb68s1JfvjaMw_RLmVLeO56eDw5I",
    authDomain: "crown-db-cd29e.firebaseapp.com",
    projectId: "crown-db-cd29e",
    storageBucket: "crown-db-cd29e.appspot.com",
    messagingSenderId: "519863930332",
    appId: "1:519863930332:web:56f0b719b152c2bdf95319",
    measurementId: "G-WQFR8VWE7N"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch(error) {
        console.log('error creating user', error.message)
      }

    }
    return userRef;
  };


 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;