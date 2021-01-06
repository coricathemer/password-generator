// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// write the password here

function generatePassword() {
  var length = prompt("Password must be between 8 and 128 characters.")
  if (length > 8 || length < 128) {
    window.alert("Great!")
  } else {
    window.alert("Please select a length between 8 and 128")
  }
  var lower = prompt("Please Select a lower case letter between a-z.")
  if (lower === "abcdefghijklmnopqrstuvwxyz") {
    window.alert("Fantastic!")
  } else {
    window.alert("Please select a lower case letter between a-z")
  }
  var upper = prompt("Please select an UPPER case letter between A-Z")
  if (upper === "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    window.alert("Super!")
  } else {
    window.alert("Please select an UPPER case letter between A-Z")
  }
  var number = prompt("Please pick a number between 0-9")
  if (number > 9) {
    window.alert("Wonderful!")
  } else {
    window.alert("Please pick a number between 0-9")
  }
  var symbol = prompt("Please pick a special character !@#$%^&(.")
  if (symbol === true) {
    window.alert("Marvelous!")
  } else {
    window.alert("Please pick a special character !@#$%^&*(.")
  }
}
