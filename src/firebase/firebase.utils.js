import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQZXYzvTDqD6BX_mr2LGjr3QOxOUp6I1U",
  authDomain: "e-com-v1.firebaseapp.com",
  projectId: "e-com-v1",
  storageBucket: "e-com-v1.appspot.com",
  messagingSenderId: "194931220210",
  appId: "1:194931220210:web:aaf381d5dc95404bcf3a6b",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid})`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
