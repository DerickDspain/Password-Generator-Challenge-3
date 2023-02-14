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

function generatePassword(passLength, numsAns, specCharsAns, lowerCaseAns, upperCaseAns){
  var passCriteria = "";
   if (numsAns.toLowerCase() === "yes"){
     var allNums ="0123456789";
     passCriteria += allNums;
   }
   if (specCharsAns.toLowerCase() === "yes"){
     var specChars = "!@#$%&*?";
     passCriteria += specChars;
   } 
   if (lowerCaseAns.toLowerCase() === "yes"){
     var lowerCase ="abcdefghijklmnopqrstuvwxyz";
     passCriteria += lowerCase;
    }
    if (upperCaseAns.toLowerCase() === "yes"){
      var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      passCriteria += upperCase;
    }
    if (numsAns.toLowerCase() === "no" && specCharsAns.toLowerCase() === "no" && lowerCaseAns.toLowerCase() === "no" && upperCaseAns.toLowerCase() === "no") {
      alert("Please choose at least one criteria");
   } 
      var password ="";
      for (let i = 0; i < passLength; i++){
        var randomIndex = Math.floor(Math.random()* passCriteria.length);
        password += passCriteria[randomIndex]
      }
  return password;
   
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  