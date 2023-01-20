// Get the form element
var form = document.getElementById("form");

// Add an event listener to the form's submit event
form.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the input elements
  var name = document.getElementById("name");
  var email = document.getElementById("email");

  // Check if the name and email fields are not empty
  if (name.value === "" || email.value === "") {
    // Show an error message
    alert("Please fill in the name and email fields.");
  } else {
    // Show a success message
    alert("Thanks for submitting the form!");
  }
});