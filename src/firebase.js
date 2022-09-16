import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZNfczzSfCnlppcmMgfBSesuib82_aUyA",
    authDomain: "slack-clone-cef60.firebaseapp.com",
    projectId: "slack-clone-cef60",
    storageBucket: "slack-clone-cef60.appspot.com",
    messagingSenderId: "1068660025464",
    appId: "1:1068660025464:web:242adf58d659c8c425258d",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
