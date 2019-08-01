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

    // The code snippet below is in Node.js
    var unirest = require("unirest");
    var req = unirest("GET", "https://coinapi.p.rapidapi.com/v1/quotes/BTC/current");

    req.headers({
      "x-rapidapi-host": "coinapi.p.rapidapi.com",
      "x-rapidapi-key": "0a2f41c915msh0dad1ae484cc461p162b61jsn3b3ffcff3072"
    });

    req.end(function (res) {
      if (res.error) throw new Error(res.error);
      console.log(res.body);
    });


    // Coin API call in jQuery might be:
    var queryURL = "https://coinapi.p.rapidapi.com/v1/quotes/" + coinSymbol + "/current";
    req.headers({
        "x-rapidapi-host": "coinapi.p.rapidapi.com",
        "x-rapidapi-key": "0a2f41c915msh0dad1ae484cc461p162b61jsn3b3ffcff3072";
      )
    };

    unirest.post(API - URL)
      .header("X-RapidAPI-Key", API - KEY)


    //populate queryURL with cryptocurrency coin symbol chosen in search bar. Example here is Bitcoin (BTC)
    var coinSymbol = "BTC"

    Request Method: GET




    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
        $("#).text(JSON.stringify(response))
        });



    });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });



  // Currency Exchange API call
  var queryURL = https: //currency-exchange.p.rapidapi.com/exchange"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
        $("#).text(JSON.stringify(response));
        });



      req.query({
        q: "1.0",
        from: "USD",
        to: "GBP"
      });

      req.headers({
        "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
        "x-rapidapi-key": "0a2f41c915msh0dad1ae484cc461p162b61jsn3b3ffcff3072"
      });

      req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
      });


      // This is the NYT API search, but it has search input parameters built-in (search-term and start/end dates).
      // We probably don't want those on the HTML, but will want to add parameters to our API call for the crupto-news sidebar.

      function buildQueryURL() {
        var nytApiBusiness = "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M";

        var nytApiTechnology = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M";


        // In case we need the apiKey to make calls for other sections of NYT. The following values are allowed: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world

        var apiKey = {
          "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M"
        };


        console.log("---------------\nURL: " + queryURL + "\n---------------");
        console.log(queryURL + $.param(queryParams));
        return queryURL + $.param(queryParams);
      }
    });