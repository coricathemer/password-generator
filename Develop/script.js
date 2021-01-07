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
  var length = parseInt(prompt("Password must be between 8 and 128 characters."))
  var confirmLower = confirm("Do you want lower case letters?")
  var confirmUpper = confirm("Do you want UPPER case letters?")
  var confirmNumber = confirm("Do you want a number?")
  var confirmSymbol = confirm("Do you want to include special characters?")

  if (length <128 || length >8) {

  } else {
    window.alert("Password must be between 8 and 128 characters.")
  }
  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolChars = ["!", "@", "#", "$", "%", "^", "&", "*", "("]

  var possibleChars = [];

  if (confirmLower){
    for(let i= 0; i<lowerChars.length; i++){
      possibleChars.push( lowerChars[i] )
    }
  }
  if (confirmUpper){
    for(let i= 0; i<upperChars.length; i++){
      possibleChars.push( upperChars[i] )
    }
  }
  if (confirmNumber){
    for(let i= 0; i<numberChars.length; i++){
      possibleChars.push( numberChars[i] )
    }
  }
  if (confirmSymbol){
    for(let i= 0; i<symbolChars.length; i++){
      possibleChars.push( symbolChars[i] )
    }
  }
  console.log(possibleChars)
  //start building a string.
  var finalPassword = "";
  // something with the length
  for(let i= 0; i<length; i++){
    var random = Math.floor(Math.random()* possibleChars.length)
    // random char from possibleChars
    finalPassword = finalPassword + possibleChars[random];
  }
  return finalPassword;

 
}
