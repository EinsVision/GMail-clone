import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZm-J2kBsrcNXxMAxqt69tkoQAMYkYhVk",
  authDomain: "clone-f7367.firebaseapp.com",
  projectId: "clone-f7367",
  storageBucket: "clone-f7367.appspot.com",
  messagingSenderId: "1003697238232",
  appId: "1:1003697238232:web:6281e3f7e4d41d605827ad"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};