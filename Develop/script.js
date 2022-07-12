// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// var specialCharacters = (" !"#$%&;()*+,-./:;<=>?@[\]^_`{|}~").split'')

var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if(password.includes(specialCharacters)){
    console.log("Email is valid");
  }
  else{
    console.log("Email is not valid");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
