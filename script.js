// Assignment Code Begins

// Grabs the generate selector
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");


//strings to set our password
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersString = "0123456789";
var specialString = "!()?[]`~;:!@#$%^&*+=";


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);

function copyPassword(){
  var textToCopy = document.getElementById("password").value;

  if (textToCopy === ''){
      window.alert("There is nothing to copy. Please generate a password.");
      return;
  } else
  // console.log(textToCopy)
  // var el = textToCopy;
  // el.select()
  // document.execCommand('copy')
  var str = document.getElementById("password").value;
// Create new element
var el = document.createElement('textarea');
// Set value (string to be copied)
el.value = str;
// Set non-editable to avoid focus and move outside of view
el.setAttribute('readonly', '');
el.style = {position: 'absolute', left: '-9999px'};
document.body.appendChild(el);
// Select text inside element
el.select();
// Copy text to clipboard
document.execCommand('copy');
// Remove temporary element
document.body.removeChild(el);
  window.alert("Password Copied!");
  return;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//checks to see if the string is undefined and if so do not write
  if (password == undefined) {
    return;
  }
  else {
  passwordText.value = password;
  }
};

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
  combinePassword += lowerCaseString;
  }
  if (upperCase) {
  combinePassword += upperCaseString;
  }
  if (numbers) {
  combinePassword += numbersString;
  }
  if (special) {
  combinePassword += specialString;
};
// if any of the conditions are true run the code
  if (lowerCase === true || upperCase === true || numbers === true || special === true){
//random string generator for password
  for ( var i = 0; i < passwordLength; i++ ) {
  password += combinePassword[Math.floor(Math.random() * combinePassword.length)];
  }
//adds the password back to the array
  return password;
  }
}
};
