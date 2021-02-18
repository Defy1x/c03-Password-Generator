// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabetArray =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbersArray =["0","1","2","3","4","5","6","7","8","9"];
var specialArray =[ "!", "#", "$", "%", "&", ")", "(", "*", "+", "?", "@", "~" ];
var password=[""];

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
    window.alert("Please choose a number between 8 - 128 characters");
    lengthPrompt();
  }
  else if (userChoice < 8 || userChoice > 128) {
    window.alert("Please choose a number between 8 - 128 characters");
    lengthPrompt();
  }
  else if(isNaN(userChoice)){
    window.alert("Please choose a number not a character");
    lengthPrompt();
  }
  else if (userChoice >= 8 || userChoice <= 128) {
    var characterLength = userChoice;
    console.log(characterLength);
    return;
  }
};

var lowerCasePrompt = function() {
  var inputLowerCase = window.prompt("Would you like Lowercase letters? (Y/N)");
  var answerLowerCase = inputLowerCase.toUpperCase();
  console.log(answerLowerCase);

  if (!answerLowerCase) {
    window.alert("Please enter Y or N");
    console.log("they did not make a choice");
    lowerCasePrompt();
  }
  else if (answerLowerCase === "Y"){
    console.log("the user picked lowercase password");
    return;
  }
  else if (answerLowerCase === "N"){
    console.log ("The user did not pick lowercase password");
    return;
  }
  else if (answerLowerCase !== "N" || answerLowerCase !== "Y"){
    window.alert("Please enter Y or N");
    console.log("they did not enter the right character");
    lowerCasePrompt();
  }
};

var upperCasePrompt = function() {
  var inputUpperCase = window.prompt("Would you like Uppercase letters? (Y/N)");
  var answerUpperCase = inputUpperCase.toUpperCase();

  if (!answerUpperCase) {
    window.alert("Please enter Y or N");
    console.log("they did not make a choice");
    upperCasePrompt();
  }
  else if (answerUpperCase === "Y") {
    console.log("the user picked uppercase password");
    return;
  }
  else if (answerUpperCase === "N"){
    console.log ("The user did not pick uppercase password");
    return;
  }
  else if (answerUpperCase !== "N" || answerUpperCase !== "Y"){
    window.alert("Please enter Y or N");
    console.log("they did not enter the right character");
    upperCasePrompt();
  }
};

var numberPrompt = function() {
  var inputNumber = window.prompt("Would you like Numbers? (Y/N)");
  var answerNumber = inputNumber.toUpperCase();

  if (!answerNumber) {
    window.alert("Please enter Y or N");
    console.log("they did not make a choice");
    numberPrompt();
  }
  else if (answerNumber === "Y") {
    console.log("the user picked numbers in their password");
    return;
  }
  else if (answerNumber === "N"){
    console.log ("The user did not pick numbers in their password");
    return;
  }
  else if (answerNumber !== "N" || answerNumber !== "Y"){
    window.alert("Please enter Y or N");
    console.log("they did not enter the right character");
    numberPrompt();
  }
};

var specialPrompt = function() {
  var inputAnswer = window.prompt("Would you like Special Characters? (Y/N)");
  var answerSpecial = inputAnswer.toUpperCase();

  if (!answerSpecial) {
    window.alert("Please enter Y or N");
    console.log("they did not make a choice");
    specialPrompt();
  }
  else if (answerSpecial === "Y") {
    console.log("the user picked Special Characters in their password");
    return;
  }
  else if (answerSpecial === "N"){
    console.log ("The user did not pick lowercase password");
    return;
  }
  else if (answerSpecial !== "N" || answerSpecial !== "Y"){
    window.alert("Please enter Y or N");
    console.log("they did not enter the right character");
    specialPrompt();
  }
};

//Start password generation on button click
var generatePassword = function(){
//run the length prompt function
  lengthPrompt();
//run the lowercase function
  lowerCasePrompt();
//run the uppercase prompt
  upperCasePrompt();
//run the number prompt
  numberPrompt();
//run the special characters prompt
  specialPrompt();
};
