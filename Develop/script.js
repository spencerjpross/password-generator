// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// var specialCharacters = (" !"#$%&;()*+,-./:;<=>?@[\]^_`{|}~").split'')

let upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters = ["~", "`", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

let characterArray = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";



//prompt to confirm password length
let passwordLength = prompt("How many characters would you like in your password between 8 and 128?") 
//prompt to confirm uppercase letters
let confirmUpperCase = confirm("Do you want uppercase letters in your password?") 
//prompt to confirm lowercase letters
let confirmLowerCase = confirm("Do you want lowercase letters in your password?")
//prompt to confirm numbers
let confirmNumbers = confirm("Do you want numbers in your password?")
//prompt to confirm special characters
let confirmSpecialCharacters = confirm("Do you want special characters in your password?")





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  for (var i = 0; i < passwordLength; i++) {
  
  }

  if(password.includes(specialCharacters)){
    console.log("Email is valid");
  }
  else{
    console.log("Email is not valid");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


