
$(document).ready(function() {

  $(".search-button").click(function() {
    var url = "http://en.wikipedia.org/w/api.php? format=json&action=query&list=search&srsearch="
    console.log("rossing");
    var searchVal = $(".search-bar").val();
    url += searchVal + "&callback=?";
    console.log(searchVal);
    console.log(url);

    $.ajax({
      type: "Get",
      url: url,
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function(data, textStatus, jqXHR) {

        console.log(data);
        var listO = data.query.search;
        listParse(listO);

      },
      error: function(errorMessage) {}

    });

  });

});

function listParse(l) {
  for (obj in l) {
    title = l[obj].title;
    summary = l[obj].snippet;
    pageURL = "http://en.wikipedia.com/wiki/" + title;
    $(".list-wrap").append("<div class=\"item-wrap\"><a href=\"" + pageURL + "\" target = \"_blank\"><div class=\"title-wrap\"><h3>" + title + "</h3></div><div class=\"summary-wrap\"><p>" + summary + "...</p></div></a></div>");
  }
}
