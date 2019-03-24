import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

export function initializeFirebase() {
    // Initialize Firebase
    if (!firebaseConfig || !firebaseConfig.apiKey || firebaseConfig.apiKey === '<YOUR-API-KEY>') {
      throw new Error('Add your own firebaseConfig.json file in the folder /utils/firebaseConfig.json');
    }
    firebase.initializeApp(firebaseConfig); 
}

// Firebase LogIn service
export function logInUser(email, password) {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log(user);
      });

    }
    catch(error){
      console.log(error.toString());
    }
}

// Firebase SignUp service
export function signUpUser(name, email, password){

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(error => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  })
  .then(user => {
    // if user was succesfully registered -> add user to database
    if (user) {
      const email = user.email;
      const uid = user.uid;
      firebase.database().ref('users/' + uid).set({
          name: name,
          email: email
      });
      user.updateProfile({
        displayName: name,
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
    }
  });
}

export function logout() {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}

export function checkLoggedIn(callback){
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      callback(user);
    } else {
      // No user is signed in.
    }
  });
}