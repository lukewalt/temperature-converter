
// Get a references in the DOM
var userInput = document.getElementById("user-input");
var convButton = document.getElementById("converter");
var convtdTemp = document.getElementById("conv-temp");



var clearUserInput = function() {
  userInput.value = "";
}

function toCelsius (num) {
  num = userInput.value;
  convtdTemp.innerHTML = (num - 32) / 1.8;
}

function toFahrenheit (num) {
  num = userInput.value;
  convtdTemp.innerHTML = (num * 1.8) + 32;
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  var cf_select = document.getElementById("cf_select");
  if(cf_select.value === "celsius") {
    toCelsius();
  } else {
    toFahrenheit();
  }
}

// Assign a function to be executed when the button is clicked
var showConvertedNumber = function() {
  convButton.addEventListener("click", determineConverter);
}

// [color the value] document.getElementById("myH2").style.color = "#ff0000";
//event handler that detects if 'enter' was pressed
// function inputKeyUp(e) {
//     e.which = e.which || e.keyCode;
//     if(e.which == 13) {
//         // submit
//     }
// }
