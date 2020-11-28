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
