$(document).on("ready", function() {
  console.log("ready");
  function populateNews() {
    var news = $(this).attr("data-name");
    var queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cryptocurrency&api-key=F86BqhNAvBubVGR0OjFhBa8R1QbGr3gD";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(NYTData) {
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
