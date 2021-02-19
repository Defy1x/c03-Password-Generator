// Assignment Code
// Grabs the generate selector
var generateBtn = document.querySelector("#generate");

//strings to set our password
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersString = "0123456789";
var specialString = "!()?[]`~;:!@#$%^&*+=";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start password generation on button click
var generatePassword = function(){
  var password=[];
  var passwordLength = window.prompt("Enter a number between 8 - 128 characters:");
  if (!passwordLength) {
    window.alert("Please choose a number between 8 - 128 characters");
    return;
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please choose a number between 8 - 128 characters");
    console.log("test error one");
    return;
  }
//checks to see if the number entered is a number
  else if(isNaN(passwordLength)){
    window.alert("Please choose a number not a character");
    console.log("test error two")
    return;
  }
  else if (passwordLength >= 8 || passwordLength <= 128) {
    console.log(passwordLength);
  }


//confirm password with options window
  var lowerCase = confirm("Would you like to include lowercase letters in your password?");
  console.log(lowerCase);
  var upperCase = confirm("Would you like to include uppercase letters in your password?");
  console.log(upperCase);
  var numbers = confirm("Would you like to include numbers in your password?");
  console.log(numbers);
  var special = confirm("Would you like to include special characters in your password?");
  console.log(special);
  var combinePassword = "";

  if (lowerCase) {
  combinePassword = lowerCaseString;
  }
  if (upperCase) {
  combinePassword = combinePassword + upperCaseString;
  }
  if (numbers) {
  combinePassword = combinePassword + numbersString;
  }
  if (special) {
  combinePassword = combinePassword + specialString;

  for ( var i = 0; i < passwordLength; i++ ) {
  password += combinePassword[Math.floor(Math.random() * combinePassword.length)];
  }
  return password;
  }
};
