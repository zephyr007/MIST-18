const express = require('express');
const port = process.env.PORT || 3000;
const ip = process.env.IP || '127.0.0.1';
const  firebase = require('firebase');
const firebaseui = require('firebaseui');
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAkNXb7dJeu-IR3BvSt1lN3samo-CdAKsM",
    authDomain: "mist-18.firebaseapp.com",
    databaseURL: "https://mist-18.firebaseio.com",
    projectId: "mist-18",
    storageBucket: "mist-18.appspot.com",
    messagingSenderId: "627563380427"
};

firebase.initializeApp(config);
var id_token = googleUser.getAuthResponse().id_token;

// Build Firebase credential with the Google ID token.
var credential = firebase.auth.GoogleAuthProvider.credential(id_token);

// Sign in with credential from the Google user.
firebase.auth().signInAndRetrieveDataWithCredential(credential).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});

app = express();

app.get('/',function (req, res) {
    res.sendFile('login.html')
});


app.listen(port,ip,function () {
    console.log("listening to port : "+ port );
});