import React, { Component } from "react";

import * as firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

class Firebase extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
    this.db = firebase.firestore();
    this.authRef = firebase.auth();
  }

  signIn = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  getSignedUser = async () => {
    return await firebase.auth().currentUser;
  };

  signOut = () => {
    this.authRef.signOut();
  };
}

export default Firebase;
