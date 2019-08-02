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


  // ***CoinAPI***
  // var queryURL = "https://coinapi.p.rapidapi.com/v1/quotes/current";
  //populate queryURL with cryptocurrency coin symbol chosen in search bar. Example here is Bitcoin (BTC)
  var coinSymbol = "IDAX_SPOT_ETH_BTC";
  var queryURL = "https://coinapi.p.rapidapi.com/v1/quotes/" + coinSymbol + "/current";

  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      "x-rapidapi-host": "coinapi.p.rapidapi.com",
      "x-rapidapi-key": "0a2f41c915msh0dad1ae484cc461p162b61jsn3b3ffcff3072"
    }
  }).then(function (response) {
    console.log(response);
    // $("#).text(JSON.stringify(response))
  });

  // ***Currency Exchange API call***

  // Add variable to get exchange from different fiat currencies:
  // var amount = "1.0";
  // var currency1 = "USD";
  // var currency2 = "GBP";
  // var queryURL2 = "'https://currency-exchange.p.rapidapi.com/exchange?q=' + amount + '&' + 'from=' + currency1 + '&' + 'to=' + currency2";

  var queryURL = "https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=USD&to=GBP";

  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
      "x-rapidapi-key": "0a2f41c915msh0dad1ae484cc461p162b61jsn3b3ffcff3072"
    }
  }).then(function (response) {
    console.log(response);
    // $("#).text(JSON.stringify(response))
  });

<<<<<<< HEAD
});


// Firebase Auth


// // New User
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

// // Sign - In
// var userEmail = $("#emailInput").val()
// var userPassword = $("#emailInput").val()
// var runAuth = firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

// // User SignOut
// firebase.auth().signOut().then(function () {
//   // Sign-out successful.
// }).catch(function (error) {
//   // An error happened.
// });

// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
// });

// var user = firebase.auth().currentUser;
// var name, email, photoUrl, uid, emailVerified;

// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
// })
=======
  // Firebase Auth


  $("#submitNew").on('click', () => {
    var userEmail = $("#emailNew").val().trim()
    var userPass = $("#passNew").val().trim()
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  })
  // 

  // // Sign - In
  // var userEmail = $("#emailInput").val()
  // var userPassword = $("#emailInput").val()
  // var runAuth = firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });

  // // User SignOut
  // firebase.auth().signOut().then(function () {
  //   // Sign-out successful.
  // }).catch(function (error) {
  //   // An error happened.
  // });

  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     // User is signed in.
  //   } else {
  //     // No user is signed in.
  //   }
  // });

  // var user = firebase.auth().currentUser;
  // var name, email, photoUrl, uid, emailVerified;

  // if (user != null) {
  //   name = user.displayName;
  //   email = user.email;
  //   photoUrl = user.photoURL;
  //   emailVerified = user.emailVerified;
  // })

});
>>>>>>> on click
