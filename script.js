/*
  Criteria prompts needed:
  -length (between 8-128)
  -character types (lowercase,uppercase,numeric,special) must pick at least one
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", showPrompts);


//testing area

function showPrompts() {
  document.getElementById('prompt-1').style.display = "block"
}

function submitLength() {
  var passwordLength = document.getElementById('password-length').value;

  if (passwordLength < 8) {
    alert("Must be between 8 and 128 characters!");
  } else if (passwordLength > 128) {
    alert("Must be between 8 and 128 characters!");
  } else {
    document.getElementById('prompt-1').style.display = "none";
    document.getElementById('prompt-2').style.display = "flex"
  }
}

function submitChar() {
  var lowercase = document.getElementById('lowercase').checked;
  var uppercase = document.getElementById('uppercase').checked;
  var numeric = document.getElementById('numeric').checked;
  var special = document.getElementById('special-char').checked;

  if (!lowercase && !uppercase && !numeric && !special) {
    alert("Please choose at least one character type!");
  } else {
    document.getElementById('prompt-2').style.display = "none"
    writePassword();
  }
}

