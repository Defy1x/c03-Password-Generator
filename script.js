// Assignment Code Begins

// Grabs the generate selector
var generateBtn = document.querySelector("#generate");

//strings to set our password
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersString = "0123456789";
var specialString = "!()?[]`~;:!@#$%^&*+=";


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Start password generation on button click
var generatePassword = function(){
  var password=[];
  var passwordLength = window.prompt("Enter a number between 8 to 128:");

  if (!passwordLength) {
    window.alert("Please choose a number between 8 to 128. Please try again.");
    return;
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please choose a number between 8 to 128. Please try again.");
    return;
  }
//checks to see if the number entered is a number
  else if(isNaN(passwordLength)){
    window.alert("Please choose a number not a character. Please try again.");
    return;
  }
  else if (passwordLength >= 8 || passwordLength <= 128) {
  }

//confirm password with options window
  var lowerCase = confirm("Would you like to include lowercase letters in your password?");
  var upperCase = confirm("Would you like to include uppercase letters in your password?");
  var numbers = confirm("Would you like to include numbers in your password?");
  var special = confirm("Would you like to include special characters in your password?");

//make sure atleast one option is selected
  if (lowerCase === false && upperCase === false && numbers === false && special === false){
    window.alert("You must choose one of the four options to make your password protected. Please try again.");
    return;
  }
  else {
//combines the password together based on options selected
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
};
// if any of the conditions are true run the code
  if (lowerCase ===true || upperCase === true || numbers ===true || special === true){
//random string generator for password
  for ( var i = 0; i < passwordLength; i++ ) {
  password += combinePassword[Math.floor(Math.random() * combinePassword.length)];
  }
//adds the password back to the array
  return password;
  }
}
};
