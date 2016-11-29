
var clearUserInput = function() {
  document.getElementById('user-input').value = "";
}

function toCelsius (num) {
  num = document.getElementById('user-input').value;
  document.getElementById('conv-temp').innerHTML = (num - 32) / 1.8;
}

function toFahrenheit (num) {
  num = document.getElementById('user-input').value;
  document.getElementById('conv-temp').innerHTML = (num * 1.8) + 32;
}


// Get a reference to the button element in the DOM
var convButton = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);

}

//event handler that detects if 'enter' was pressed
function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
        // submit
    }
}

// Assign a function to be executed when the button is clicked
//button.addEventListener("click", determineConverter);



// [color the value] document.getElementById("myH2").style.color = "#ff0000";
