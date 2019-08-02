$(document).ready(function (window) {
  console.log("document ready");

  var firebaseConfig = {
    apiKey: "AIzaSyCJF2Rjt64-Xubs-mipH-tF42L4_Vz9R0Y",
    authDomain: "project1-579e0.firebaseapp.com",
    databaseURL: "https://project1-579e0.firebaseio.com",
    projectId: "project1-579e0",
    storageBucket: "project1-579e0.appspot.com",
    messagingSenderId: "861935562453",
    appId: "1:861935562453:web:935185dce5c6989b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  // CoinAPI
  var unirest = require("unirest");

  var req = unirest("GET", "https://coinapi.p.rapidapi.com/v1/exchangerate/USD");

  req.headers({
    "x-rapidapi-host": "coinapi.p.rapidapi.com",
    "x-rapidapi-key": "8a398d0356msh92b4964ad1b331dp1482c2jsna497f038258b"
  });



  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });


  // Currency Exchange
  var unirest = require("unirest");

  var req = unirest("GET", "https://currency-exchange.p.rapidapi.com/exchange");

  req.query({
    "q": "1.0",
    "from": "USD",
    "to": "GBP"
  });

  req.headers({
    "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
    "x-rapidapi-key": "8a398d0356msh92b4964ad1b331dp1482c2jsna497f038258b"
  });


  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  })

  // Firebase Auth
  // var email = $("#emailInput").val()
  // var password = $("#emailInput").val()
  // var runAuth = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });

  // User SignOut
  // firebase.auth().signOut().then(function() {
  //   // Sign-out successful.
  // }).catch(function(error) {
  //   // An error happened.
  // });
})