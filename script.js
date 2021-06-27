/*
  Criteria prompts needed:
  -length (between 8-128)
  -character types (lowercase,uppercase,numeric,special) must pick at least one
*/

// Variables
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericChar = "0123456789"
var specialChar = '!"#$%&()*+,-./:;<=>?@][^_`{|}~'

var lowercase
var uppercase
var numeric
var special

var passwordLength

var password = "";

// Add event listener to generate button
generateBtn.addEventListener("click", prompt1);

//Prompts
function prompt1() {
  passwordLength = parseInt(prompt("Enter password length. (Must be between 8 and 128)"));


  
  if (isNaN(passwordLength) || passwordLength == undefined || passwordLength == null) {
    alert("Please enter a number!");
    prompt1();
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128!");
    prompt1();
  } else {
    confirm1();
  }
}

function confirm1() {
  lowercase = confirm("Include lowercase characters?");
  confirm2();
}

function confirm2() {
  uppercase = confirm("Include uppercase characters?");
  confirm3();
}
function confirm3() {
  numeric = confirm("Include numeric characters?");
  confirm4();
}

function confirm4() {
  special = confirm("Include special characters?");

  if (!lowercase && !uppercase && !numeric && !special) {
    alert("You must select at least one type of character set!");
    confirm1();
  } else {
    writePassword();
  }
}

// Write password to the #password input
function writePassword() {
  document.getElementById('password').innerHTML = generatePassword();
}

function generatePassword() {
  var passwordChar = "";
  password = ""

  lowercase ? (passwordChar += lowercaseChar) : "";
  uppercase ? (passwordChar += uppercaseChar) : "";
  numeric ? (passwordChar += numericChar) : "";
  special ? (passwordChar += specialChar) : "";

  for (let i = 0; i < passwordLength; i++) {
    password += passwordChar.charAt(
      Math.floor(Math.random() * passwordChar.length)
    );
  }
  return password;
}