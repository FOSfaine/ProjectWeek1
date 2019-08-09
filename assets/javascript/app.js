$(document).ready(function (window) {


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
  const db = firebase.database();
  const auth = firebase.auth()


  function createButtons(array) {

    for (var i = 0; i < 5; i++) {
      $(".user-content").append($("<button>").attr("class", "crypto_buttons").attr("id", array[i].asset_id_quote).text(array[i].asset_id_quote))
    }
    $(".crypto_buttons").on("click", function (event) {
      buttonID = event.target.id
      console.log("You Clicked: " + buttonID)
      var ratez = allRates[buttonID]
      ratez = (1 / ratez)
      ratez = ratez.toFixed(2)
      cardCreation(buttonID, ratez)
    })

  }

  // ***CoinAPI call 1***
  //This api call pulls assets (in asset_id by symbol) requested and pairs with asset_id_base (in USD):
  var queryURL = "https://coinapi.p.rapidapi.com/v1/exchangerate/USD";
  var allRates = {}
  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      "x-rapidapi-host": "coinapi.p.rapidapi.com",
      "x-rapidapi-key": "0a2f41c915msh0dad1ae484cc461p162b61jsn3b3ffcff3072"
    }
  }).then(function (response) {

    var ratesArray = response.rates;

    for (var j = 0; j < 199; j++) {

      var assetId = ratesArray[j].asset_id_quote;
      var assetRate = ratesArray[j].rate;
      allRates[assetId] = assetRate
    }

    createButtons(ratesArray);
  });

  // ***CoinAPI call 2***
  //This api call pulls assets by name and matches them with their asset-id. ONLY for search bar.
  var nameQueryURL = "https://coinapi.p.rapidapi.com/v1/assets";
  var coinName = ""

  $.ajax({
    url: nameQueryURL,
    method: "GET",
    headers: {
      "x-rapidapi-host": "coinapi.p.rapidapi.com",
      "x-rapidapi-key": "0a2f41c915msh0dad1ae484cc461p162b61jsn3b3ffcff3072"
    }
  }).then(function (response) {

    for (var i = 0; i < 199; i++) {

      var assetId = response[i].asset_id;
      var assetName = response[i].name;
      var assetInfo = assetName + ": " + assetId;

      $("#currencies").append($("<option>").val(assetInfo));
      // console.log("Coin name: " + assetName, ": " + assetId);

    }
  });

  $("#searchGo").on('click', () => {
    event.preventDefault();
    // data pull
    $("#clear").show()
    let choice = $("#searchInput").val()
    let search = ""
    let rateUSD = ""
    for (i = 3; i > 0; i--) {
      search = search.concat((choice[choice.length - i]))
    }
    search = search.trim()
    console.log(search)
    rateUSD = allRates[search]
    rateUSD = (1 / rateUSD)
    rateUSD = rateUSD.toFixed(2)
    // card generation 
    cardCreation(choice, rateUSD)
    $("#searchInput").val("")
  })
  var cardCount = 0

  $("#clear").on('click', () => {
    console.log('clear')
    clearSearch()
    $("#clear").hide()
  })

  async function cardCreation(choice, rate) {
    cardCount++

    var newCard = $("<div></div>")
    newCard.attr("class", "card")
    newCard.attr("id", "card-" + cardCount)

    var newBody = $("<div></div>")
    var newButton = $("<button></button>")
    var newTextEU = $("<p></p>")
    var newTextCAD = $("<p></p>")

    var money1 = await getMula("USD", "EUR")
    var money2 = await getMula("USD", "CAD")

    money1 *= rate
    money2 *= rate
    money1 = money1.toFixed(2)
    money2 = money2.toFixed(2)


    newTextEU.text(money1 + " EUR")
    newTextCAD.text(money2 + " CAD")
    newButton.text("X")
    newButton.attr("class", "quit")
    newButton.attr("id", cardCount)

    newBody.attr("class", "card-body")
    newBody.text(choice + " is worth " + rate + " USD")
    newBody.append(newTextEU)
    newBody.append(newTextCAD)

    newCard.append(newBody)
    newCard.append(newButton)

    $(".card-holder").prepend(newCard)
    $(".quit").on("click", (evt) => {
      var id = evt.target.id
      clearCard(id)
    })

  }


  function clearCard(cardNum) {

    var card = $("#card-" + cardNum)
    card.remove()
  }

  function clearSearch() {
    $(".card-holder").empty()
  }

  // ***Currency Exchange API code***
  function getMula(currencyA, currencyB) {
    var amount = 1;
    var currency1 = currencyA;
    var currency2 = currencyB;

    var queryURL = 'https://currency-exchange.p.rapidapi.com/exchange?q=' + amount + '&from=' + currency1 + '&to=' + currency2;
    return $.ajax({
      url: queryURL,
      method: "GET",
      headers: {
        "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
        "x-rapidapi-key": "0a2f41c915msh0dad1ae484cc461p162b61jsn3b3ffcff3072"
      }
    })
  }




  //NYT API code
  function populateNews() {
    var news = $(this).attr("data-name");
    var queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cryptocurrency&api-key=F86BqhNAvBubVGR0OjFhBa8R1QbGr3gD";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (NYTData) {
      // console.log(NYTData);
      $("#news-view").text(JSON.stringify(NYTData));
      for (var i = 0; i < 10; i++) {
        var tempHeadliner = NYTData.response.docs[i].headline.main;
        var tempLink = NYTData.response.docs[i].web_url;
        // console.log(NYTData.response.docs[i].headline.main);
        $(".side-content").append(
          $("<div>").append(
            $("<a>")
            .attr("href", tempLink)
            .text(tempHeadliner)
          ).attr("class", "news_link")
        );
      }
    });
  }

  populateNews();


  $("#eUserClick").on('click', () => {
    $("#signUp").hide()
    $("#eUserSignIn").show()
    $("#eUserClick").hide()
    $("#newUserClick").show()
  })
  $("#eUserSignIn").hide()
  $("#newUserClick").hide()
  $("#clear").hide()
  $("#newUserClick").on('click', () => {
    $("#signUp").show()
    $("#eUserSignIn").hide()
    $("#eUserClick").show()
    $("#newUserClick").hide()

  })

})