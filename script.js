//Arrays for characters
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['@','"',';','=','\\','%','+','<','>','&','*','/',"'",'!','#', '$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

//Function to generate password
function generatePassword() {
var userChar = [];
var userPassword = "";
var passLength = prompt('How many characters would you like your password to have?');

// conditionals to check password length
while (isNaN(passLength) === true) {
  alert('Your password length must be provided as a number');
  var passLength = (prompt("How many characters would you like your password to have?"));
} 
while(passLength < 8 || passLength > 128) {
  alert("Your password length must be between 8 - 128 characters. Please try again.");
  var passLength = (prompt("How many characters would you like your password to have?"));
}

// Variables to store characters to be selected.
var upperCase = confirm('Click OK to include uppercase characters in your password.');
var lowerCase = confirm('Click OK to include lowercase characters in your password.');
var numericChar = confirm('Click OK to include numbers in your password.');
var specialChar = confirm('Click OK to include special characters in your password.');

//Conditional to ensure that at least 1 character is selected.
while (!upperCase && !lowerCase && !numericChar && !specialChar) {
  alert('You need at least one character to generate your password.');
  var upperCase = confirm('Click OK to include uppercase characters in your password.');
  var lowerCase = confirm('Click OK to include lowercase characters in your password.');
  var numericChar = confirm('Click OK to include numbers in your password.');
  var specialChar = confirm('Click OK to include special characters in your password.');
}

// Conditional if each character is selected.
if (upperCase) {
  userChar = userChar.concat(upper);
}
if (lowerCase) {
  userChar = userChar.concat(lower);
}
if (numericChar) {
  userChar = userChar.concat(numbers);
}
if (specialChar) {
  userChar = userChar.concat(symbols);
}

//Loop to iterate random characters for the password
for (var i = 0; i < passLength; i++) {
  userPassword = userPassword + userChar[Math.floor(Math.random() * userChar.length)];
 
}
return userPassword;

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
