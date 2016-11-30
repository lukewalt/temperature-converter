
// Get a references in the DOM
var userInput = document.getElementById("user-input");

var convButton = document.getElementById("converter");
var convtdTemp = document.getElementById("conv-temp");


var clearUserInput = function() {
  userInput.value = "";
}

function toCelsius (num) {
  num = userInput.value;
  var c = (num - 32) / 1.8;
  // condition for color
    if (c > 32) {
      document.getElementById("conv-temp").style.color = "red";
    } else if (c < 0) {
      document.getElementById("conv-temp").style.color = "blue";
    } else {
      document.getElementById("conv-temp").style.color = "green";
    }
    convtdTemp.innerHTML = c;
}

function toFahrenheit (num) {
  num = userInput.value;
  var f = (num * 1.8) + 32;
  // condition for color
    if (f > 90) {
      document.getElementById("conv-temp").style.color = "red";
    } else if (f < 32) {
      document.getElementById("conv-temp").style.color = "blue";
    } else {
      document.getElementById("conv-temp").style.color = "green";
    }
    convtdTemp.innerHTML = f;

}

// This function should determine which conversion should
// happen based on which radio button is selected.

function determineConverter (clickEvent) {
  var cf_select = document.querySelector("input[name='cf_select']:checked").value;
  console.log(cf_select);
  if(cf_select === "celsius") {
    toCelsius();
  } else {
    toFahrenheit();
  }
}

// Assign a function to be executed when the button is clicked
convButton.addEventListener("click", determineConverter);

// event handler to the input field that checks if the user pressed the enter key

function pressEnter(e) {
  if(e.keyCode == 13){
    determineConverter();
  }
}

// function to be executed when the user clicks enter
userInput.addEventListener("keypress", pressEnter);
