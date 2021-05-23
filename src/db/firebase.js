import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyDAAF98CR3uuGrtaLm3QKSePdQq0iOw5w0",
    authDomain: "it-jobs-45eaa.firebaseapp.com",
    projectId: "it-jobs-45eaa",
    storageBucket: "it-jobs-45eaa.appspot.com",
    messagingSenderId: "364897199092",
    appId: "1:364897199092:web:bcf740902f01c5315d0fa1"
})

let isAuthenticated = false
firebase.auth().onAuthStateChanged( user => user? isAuthenticated=true : false)

const db = firebase.firestore();

export { db, firebaseApp, isAuthenticated }