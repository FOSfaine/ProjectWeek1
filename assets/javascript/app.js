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
  const db = firebase.firestore();
  const auth = firebase.auth()

  // ***CoinAPI***
  //This api call pulls assets (in asset_id by symbol) requested and pairs with asset_id_base (in USD):
  var queryURL = "https://coinapi.p.rapidapi.com/v1/exchangerate/USD";

  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      "x-rapidapi-host": "coinapi.p.rapidapi.com",
      "x-rapidapi-key": "0a2f41c915msh0dad1ae484cc461p162b61jsn3b3ffcff3072"
    }
  }).then(function (response) {

    var ratesArray = response.rates;

    for (var j = 0; j < 99; j++) {

      var assetId = ratesArray[j].asset_id_quote;
      var assetRate = ratesArray[j].rate;

      console.log("assetId: " + assetId, "assetRate: " + assetRate);
    }
  });


  // ***Currency Exchange API call***
  var amount = "1.0";
  var currency1 = "USD";
  var currency2 = "GBP";

  var queryURL = 'https://currency-exchange.p.rapidapi.com/exchange?q=' + amount + '&from=' + currency1 + '&to=' + currency2;

  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
      "x-rapidapi-key": "0a2f41c915msh0dad1ae484cc461p162b61jsn3b3ffcff3072"
    }
  }).then(function (response) {
    console.log("currency converted: " + response);
  });

  // Firebase Auth


  $("#submitNew").on('click', () => {
    var userEmail = $("#emailNew").val().trim()
    var userPass = $("#passNew").val().trim()

    // Passwork check and make sure the email is not already in our system
    if (passCheck(userPass)) {
      firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

      });
      $("#emailNew").text("")
      $("#passNew").text("")

    } else {
      console.log("Invaild Password")
    }
    if (user) {
      user.updateEmail(userEmail).then(function () {
        // Update successful.
      }).catch(function (error) {
        console.log("nope nope nope")
      });

      user.updatePassword(userPass).then(function () {
        // Update successful.
      }).catch(function (error) {
        console.log("naaa")
      });
      console.log("creation success")
    }
  })

  function passCheck(pass) {
    // Must use a capital letter 
    var lowercase = pass.toLowerCase()
    if (lowercase === pass) {
      return false
    } else {
      return true
    }
    // idk something for numbers or symbols 
  }
  // Checks to see if the submitted email is in our records
  function emailCheck() {}

  $("#submitLogin").on('click', () => {
    var userEmail = $("#loginEmail").val().trim()
    var userPass = $("#loginPass").val().trim()
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      //   // ...
    });

  })

  $("#logOut").on('click', () => {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      console.log("signing OUT")
    }).catch(function (error) {
      // An error happened.
    });
  })

  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  var userName = ""
  var userEmail = ""
  var userPhoto = ""
  var userEmailVerified = ""

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("Ayo we logged in")


      userName = user.displayName;
      userEmail = user.email;
      userPhoto = user.photoURL;
      userEmailVerified = user.emailVerified;

      console.log(userEmail)
    } else {
      console.log("no user sign-in")
    }
  });

  function populateNews() {
    var news = $(this).attr("data-name");
    var queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cryptocurrency&api-key=F86BqhNAvBubVGR0OjFhBa8R1QbGr3gD";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (NYTData) {
      console.log(NYTData);
      $("#news-view").text(JSON.stringify(NYTData));
      for (var i = 0; i < 10; i++) {
        var tempHeadliner = NYTData.response.docs[i].headline.main;
        var tempLink = NYTData.response.docs[i].web_url;
        console.log(NYTData.response.docs[i].headline.main);
        $(".side-content").append(
          $("<div>").append(
            $("<a>")
            .attr("href", "web_url")
            .text(tempHeadliner)
          )
        );
      }
    });
  }
  populateNews();




});