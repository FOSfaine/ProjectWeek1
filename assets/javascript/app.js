$(document).ready(function(window) {
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

  // CoinAPI
  var unirest = require("unirest");

  var req = unirest(
    "GET",
    "https://coinapi.p.rapidapi.com/v1/exchangerate/USD"
  );

  req.headers({
    "x-rapidapi-host": "coinapi.p.rapidapi.com",
    "x-rapidapi-key": "8a398d0356msh92b4964ad1b331dp1482c2jsna497f038258b"
  });

  req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });

  // Currency Exchange
  var unirest = require("unirest");

  var req = unirest("GET", "https://currency-exchange.p.rapidapi.com/exchange");

  req.query({
    q: "1.0",
    from: "USD",
    to: "GBP"
  });

  req.headers({
    "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
    "x-rapidapi-key": "8a398d0356msh92b4964ad1b331dp1482c2jsna497f038258b"
  });

  req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });

  // This is the NYT API search, but it has search input parameters built-in (search-term and start/end dates).
  // We probably don't want those on the HTML, but will want to add parameters to our API call for the crupto-news sidebar.

  function buildQueryURL() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };

    queryParams.q = $("#search-term")
      .val()
      .trim();

    var startYear = $("#start-year")
      .val()
      .trim();

    if (parseInt(startYear)) {
      queryParams.begin_date = startYear + "0101";
    }

    var endYear = $("#end-year")
      .val()
      .trim();

    if (parseInt(endYear)) {
      queryParams.end_date = endYear + "0101";
    }

    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);
  }
});
