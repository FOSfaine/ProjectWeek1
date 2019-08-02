var database = firebase.database();

// Initial Values
var name = "";
var email = "";

// Capture Button Click
$("#add-user").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  name = $("#name-input")
    .val()
    .trim();
  email = $("#email-input")
    .val()
    .trim();

  // Code for handling the push
  database.ref().push({
    name: name,
    email: email,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

// Firebase watcher .on("child_added"
database.ref().on(
  "child_added",
  function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.email);

    // Change the HTML to reflect
    $("#name-display").text(sv.name);
    $("#email-display").text(sv.email);

    // Handle the errors
  },
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);
