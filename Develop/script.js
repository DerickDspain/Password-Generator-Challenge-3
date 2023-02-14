var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLength = prompt("How many characters? 8-128");
  if (passwordLength >= 8 && passwordLength <= 128) {
    let nums = prompt("Include Numbers?");
    let specialCharacters = prompt("Include Special Characters?");
    let lowerCase = prompt("Include Lowercase?");
    let upperCase = prompt("Include UpperCase?");
    var password = generatePassword(passwordLength, nums, specialCharacters, lowerCase, upperCase);
    var passwordText = document.querySelector("#password");
  } else {
    alert("Please make sure length is between 8 - 128 characters.");
  }
  passwordText.value = password;
}
