function news() {
  var news = $(this).attr("data-name");
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cryptocurrency&api-key=F86BqhNAvBubVGR0OjFhBa8R1QbGr3gD";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#news-view").text(JSON.stringify(response));
  });
}
