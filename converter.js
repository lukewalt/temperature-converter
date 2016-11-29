function toCelsius () {

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM
var convButton = document.getElementById("converter");

//event handler that detects if 'enter' was hit
function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
        // submit
    }
}
// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);

}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
