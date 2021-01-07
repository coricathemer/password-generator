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

// when a user is prompted to input what charachters they would like to use, the data is stored and then randomized into a unique password 

function generatePassword() {
  var length = prompt("Password must be between 8 and 128 characters.")
  var lenghtChars = "8-128"
  var confirmLengthChars = confirm("Would you like to confirm selection?")
  var userChoiceCrit = [];
  if (confirmLengthChars === true) {
    userChoiceCrit.push(confirmLengthChars)
  }
  // if (length < 8 || length > 128) {
  //   window.alert("Great!")
  // } else {
  //   window.alert("Please select a length between 8 and 128")
  // }
  var lower = prompt("Please Select a lower case letter between a-z.")
  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var confirmLowerChars = confirm("Would you like to confirm selection?")
  var userChoiceCrit = [];
  if (confirmLowerChars === true) {
    userChoiceCrit.push(confirmLowerChars)
  }
  // const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
  // if (lower === "abcdefghijklmnopqrstuvwxyz") {
  //   window.alert("Fantastic!")
  // } else {
  //   window.alert("Please select a lower case letter between a-z")
  // }
  var upper = prompt("Please select an UPPER case letter between A-Z")
  var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var confirmUpperChars = confirm("Would you like to confirm selection?")
  var userChoiceCrit = [];
  if (confirmUpperChars === true) {
    userChoiceCrit.push(confirmUpperChars)
  }
  // if (upper === "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
  //   window.alert("Super!")
  // } else {
  //   window.alert("Please select an UPPER case letter between A-Z")
  // }
  var number = prompt("Please pick a number between 0-9")
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var confirmNumbers = confirm("Would you like to confirm selection?")
  var userChoiceCrit = [];
  if (confirmNumbers === true) {
    userChoiceCrit.push(confirmNumbers)
  }  
  // if (number > 9) {
  //   window.alert("Wonderful!")
  // } else {
  //   window.alert("Please pick a number between 0-9")
  // }
  var symbol = prompt("Please pick a special character !@#$%^&(.")
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "("]
  var confirmSymbols = confirm("Would you like to confirm selection?")
  var userChoiceCrit = []; 
  if (confirmSymbols === true) {
    userChoiceCrit.push(confirmSymbols)
  }
  // if (symbol === true) {
  //   window.alert("Marvelous!")
  // } else {
  //   window.alert("Please pick a special character !@#$%^&*(.")
  // }
  var passwordArr = ["length", "lowerChars", "upperChars", "numbers", "symbols"]
  console.log(passwordArr[0])
  for (var i=0)
  passwordArr.length
  for (var i=0; i<passwordArr.length)
}
