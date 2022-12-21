const form = document.getElementById("myForm");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  console.log(`Email: ${email}`);
  console.log(`password: ${password}`);
});

// Create a button that will toggle dark mode
const toggleButton = document.getElementById("toggleDarkMode");

// Define a flag to track whether dark mode is enabled
let isDarkModeEnabled = false;

// Define a function to toggle dark mode
function toggleDarkMode() {
  isDarkModeEnabled = !isDarkModeEnabled;

  // Change the CSS styles based on the flag
  if (isDarkModeEnabled) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  //we could also use :
  //document.body.classList.add(dark-mode)
  //document.body.classList.add(dark-mode)
  //then dark-mode is a class with the css we added
}

// Add an event listener to the toggle button to call the toggleDarkMode function when clicked
toggleButton.addEventListener("click", function () {
  toggleDarkMode();
});

//Switch case clarification
//always add break/return for each case

//
let num = 2;

switch (num) {
  case 1:
    console.log("the number is 1");
    break;
  case 2:
    console.log("the number is 2");
    break;
  case 3:
    console.log("the number is 3");
    break;
  default:
    break;
}

//The output will be:
//the number is 2
//(like we expected!)

switch (num) {
  case 1:
    console.log("the number is 1");
  case 2:
    console.log("the number is 2");
  case 3:
    console.log("the number is 3");
  default:
}

//output:
//the number is 2
//the number is 3

switch (num) {
  case 1:
    console.log("the number is 1");
    break;
  case 2:
    console.log("the number is 2");
    break;
  case 3:
    console.log("the number is 3");
    break;
  default:
    break;
}

//The output will be:
//the number is 2
//(like we expected!)
