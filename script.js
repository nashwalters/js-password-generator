//Arrays for characters
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['@','"',';','=','\\','%','+','<','>','&','*','/',"'",'!','#', '$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

//Function to generate password
function generatePassword() {
var validChar =[];
var finalPassword = "";
var passlength = prompt('How many characters would you like you password to have?');

// conditionals to check password length.
if (isNaN(passlength) === true) {
  alert('Enter a number for the length of your password. Click generate password to start again!');
  return;
}
if (passlength < 8) {
  alert('Password must have at least 8 characters. Click generate password to start again! ');
  return;
}
if (passlength > 128) {
  alert('Password must must be less than 129 characters. Click generate password to start again!');
  return;
}

// Variables to store characters to be selected.
var upperCase = confirm('Click OK to include uppercase characters in your password.');
var lowerCase = confirm('Click OK to include lowercase characters in your password.');
var numericChar = confirm('Click OK to include numbers in your password.');
var specialChar = confirm('Click OK to include special characters in your password.');

//Conditional to ensure that at least 1 character is selected.
if (!upperCase && !lowerCase && !numericChar && !specialChar) {
    alert('You need at least one character to generate your password. Click generate password to start again!')
    return;
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
