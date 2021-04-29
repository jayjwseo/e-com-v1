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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
