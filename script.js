

//Function to generate password
function generatePassword() {
var validChar =[];
var userChar = [];
var finalPassword = [];
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
var upperCase = confirm('Would you like to include uppercase characters in your password?');
var lowerCase = confirm('Would you like to include lowercase characters in your password?');
var numericChar = confirm('Would you like to include numbers in your password?');
var specialChar = confirm('Would you like to include special characters in your password?');

//Conditional to ensure that at least 1 character is selected.
if (upperCase == false && lowerCase == false &&
  numericChar == false && specialChar== false) {
    alert('You need at least one character to generate your password.')
}
// Conditional if each character is selected.
if (upperCase == true){
    validChar = validChar.concat(randomUpper());
    userChar.push(randomUpper());
}
if (lowerCase == true){
    validChar = validChar.concat(randomLower());
    userChar.push(randomLower());
}
if (numericChar == true){
  validChar = validChar.concat(randomNumber());
    userChar.push(randomNumber());
}
if (specialChar == true){
    validChar = validChar.concat(randomSymbols());
    userChar.push(randomSymbols());
}

//Loop to generate the password 
for (var i= 0; i < passlength; i ++) {
  validChar = userChar[i];

  finalPassword.push(validChar);
}

for (var i= 0; i < userChar.length; i ++) {
  finalPassword[i] = userChar;
}

return finalPassword.join('')

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
