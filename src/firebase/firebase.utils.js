import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0yS-2hPlZqsUF7SPQCWd1bCl32OE75eY",
  authDomain: "ecom-project-gj.firebaseapp.com",
  databaseURL: "https://ecom-project-gj.firebaseio.com",
  projectId: "ecom-project-gj",
  storageBucket: "",
  messagingSenderId: "5745468013",
  appId: "1:5745468013:web:7dfbafcded593942"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
