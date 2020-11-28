//Function to generate Random characters
function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
function randomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
function randomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
function randomSymbols(){
  var symbols = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.', '<','>','&'];
  returnsymbols[Math.floor(Math.random()*symbols.length)];
}

//Objects and the value they will return
var randomFunc = {
  upperCase: randomUpper,
  lowerCase: randomLower,
  numericChar: randomNumber,
  specialChar: randomSymbols

}

//Function to generate password
function generatePassword() {
var password = '';

var passlength = prompt('How many characters would you like you password to have?');
// conditionals to check password length.
if (isNaN(passlength) === true) {
  alert('Enter a number for password length.');
  return;
}
if (passlength < 8) {
  alert('Password must have at least 8 characters.');
  return;
}
if (passlength > 128) {
  alert('Password must must be less than 129 characters.');
  return;
}
// Variables to store characters to be selected.
var upperCase = confirm('Would you like to include uppercase characters in your password?')
var lowerCase = confirm('Would you like to include lowercase characters in your password?')
var numericChar = confirm('Would you like to include numbers in your password?')
var specialChar = confirm('Would you like to include special characters in your password?')
}

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