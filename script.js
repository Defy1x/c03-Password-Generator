// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers =["0","1","2","3","4","5","6","7","8","9"];
var special =[ "!", "#", "$", "%", "&", ")", "(", "*", "+", "?", "@", "~" ];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var lengthPrompt = function() {
  var userChoice = window.prompt("Enter a number between 8 - 128 characters:");
  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }
  else if (userChoice < 8 && userChoice < 128) {
    window.alert("Please choose a password length between 8 - 128 characters");
    return;
  }
  else if (userChoice >= 8 && userChoice <= 128) {
    var characterLength = userChoice;
    console.log(characterLength);
    return;
  }
};

var lowerCasePrompt = function() {
  var answerLowerCase = window.prompt("Lowercase letters? (Y/N)");
  if (answerLowerCase === "Y") {
    console.log("the user picked lowercase password");
    return;
  }
  else {
  console.log("The user did not pick lowercase password");
  return;
  }
};

//Start password generation on button click
var generatePassword = function(){
//run the length prompt function
  lengthPrompt();
//run the lowercase function
  lowerCasePrompt();
};
