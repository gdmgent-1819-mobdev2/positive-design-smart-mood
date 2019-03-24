
const firebase = require('firebase')

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDfPwV0Uemy9_1cQ93ni3CYALrC8JtFEpY",
    authDomain: "smartmood-9ee53.firebaseapp.com",
    databaseURL: "https://smartmood-9ee53.firebaseio.com",
    projectId: "smartmood-9ee53",
    storageBucket: "smartmood-9ee53.appspot.com",
    messagingSenderId: "205100438842"
  };
  const firebaseInstance = firebase.initializeApp(config);

  export default firebaseInstance;