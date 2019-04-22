import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_qJZKjxYfJce0QzzUFUDEfenbKAASL0g",
    authDomain: "vehical-information-syatem.firebaseapp.com",
    databaseURL: "https://vehical-information-syatem.firebaseio.com",
    projectId: "vehical-information-syatem",
    storageBucket: "vehical-information-syatem.appspot.com",
    messagingSenderId: "820256655207"
  };
  firebase.initializeApp(config);

  export const db = firebase.database();
  export const auth = firebase.auth();