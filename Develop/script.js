// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("Hello World")
  // prompts user to choose a numerical length between 8 and 128
  var userPasswordLength = prompt("Please choose a password in length from 8 to 128 characters.")
  console.log(userPasswordLength)
  // prompts user to select password characters
  var userPasswordChar = prompt("Please choose a lowercase, UPPERCASE, numeric, and/or special character.")
  console.log(userPasswordChar)

}

function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
