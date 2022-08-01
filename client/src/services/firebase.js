import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB8UjD7EH0HjKwWsUWPsaNPla-nGGDAW5w",
    authDomain: "avtoborsa-96599.firebaseapp.com",
    projectId: "avtoborsa-96599",
    storageBucket: "avtoborsa-96599.appspot.com",
    messagingSenderId: "396337002156",
    appId: "1:396337002156:web:88aa4afdf10b737052d109",
    measurementId: "G-SXZZRG1ZR4"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;