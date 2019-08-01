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


// NYT API
function buildQueryURL() {

  var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=your-api-key";

  var apiKey = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };
  
  var queryParams = "";

  var startYear0101= "";

  var endYear0101 = "";

  return queryURL + $.param(queryParams);
}

// CoinMarketCap: keeps stalling, coming back with 504 error code 
// (server did not recieve a timely response)

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

// Reddit
appClientID: SWNU-Lo2AJ4K8NM6SCch-XIPr1w

// access token:
https://www.reddit.com/api/v1/authorize?client_id=SWNU-Lo2AJ4K8NM6SCch-XIPr1w&response_type=code&state=ProjectWeek1&redirect_uri=https://estherecho.github.io/ProjectWeek1/&duration=temporary&scope=mysubreddits
  

// The response from this request, if successful, will be JSON of the following format:
{
  "access_token": Your access token,
  "token_type": "bearer",
  "expires_in": Unix Epoch Seconds,
  "scope": A scope string,
}

// reddit continued: This did not exactly work, threw an error... I'm pretty sure it has to do with the access token (syntax error)
var unirest = require("unirest");

var req = unirest("POST", "https://redditdimashirokovv1.p.rapidapi.com/aboutSubreddit");

req.headers({
	"x-rapidapi-host": "RedditdimashirokovV1.p.rapidapi.com",
	"x-rapidapi-key": "8a398d0356msh92b4964ad1b331dp1482c2jsna497f038258b",
	"content-type": "application/x-www-form-urlencoded"
});

req.form({
	"appClientId": {},
	"subreddit": {},
	"accessToken": {}
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

})