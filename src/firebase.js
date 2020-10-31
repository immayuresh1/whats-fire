// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBI6V6k8jwoBjIRGrg1hpX1wUgtJ2sKG04",
    authDomain: "notwhatsappp.firebaseapp.com",
    databaseURL: "https://notwhatsappp.firebaseio.com",
    projectId: "notwhatsappp",
    storageBucket: "notwhatsappp.appspot.com",
    messagingSenderId: "119682375434",
    appId: "1:119682375434:web:39207e2211738010de24f3",
    measurementId: "G-4B3KRYC6T1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth =   firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth,provider};
  export default db;