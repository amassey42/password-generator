// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
//Arrays of  numbers, special, upper and lowercase letters
var charlegnth;
var result ="";
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialList =["!", "@", "#", "$", "%", "^", "&", "*" ,"(", ")"];
var lowerCaseList =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
var upperCaseList =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var charactersUsed = [];


console.log(numberList);
console.log(specialList);
console.log(lowerCaseList);
console.log(upperCaseList);

//randomizes the numbers in the numberList variable
// console.log (Math.floor(Math.random(numberList)*11));


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  
  var flag = true

  while(flag) {
    //when button is clicked Prompt user for length
    var input = prompt("Choose a number between 8 and 128.");
    //checks if input is a number if not tells user to enter a number
    if (Number.isInteger(Number.parseInt(input)) !== true){
    window.alert("Please enter a number")
    continue;
    //check password length is between 8 and 128
  } else if (Number.parseInt(input) <8 || Number.parseInt(input) > 128){
    window.alert("Please enter within number range 8 and 128.");
    continue;
    //confirm password length is between 8 and 128
  } else if (Number.parseInt(input) >= 8 && Number.parseInt(input) <= 128){
    charlegnth = Number.parseInt(input);
    flag = false;

  }
}

//Confirm functions to ask user if they want to use numbers, special characters, upper case letters or lower case letters
var useNumbers = confirm("Would you like to use numbers?")
var useSpecial = confirm("Would you like to use special characters?")
var useUpper = confirm("Would you like to use upper case letters?")
var useLower = confirm("Would you like to use lower case letters?")

//if the user selects yes it will add the array to a new array called charactersUsed and allow 
//multiple arrays to be added together
if (useNumbers) {
  charactersUsed = charactersUsed.concat(numberList)
}
if (useSpecial) {
  charactersUsed = charactersUsed.concat(specialList)
}
if (useUpper) {
  charactersUsed = charactersUsed.concat(upperCaseList)
}
if (useLower) {
  charactersUsed = charactersUsed.concat(lowerCaseList)
}
 console.log(charactersUsed)


  
    return "password"
  }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// GIVEN I need a new, secure password
//  WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
//  WHEN prompted for password criteria
// THEN I select which criteria to include in the password
//  WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
//  WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// TODO: WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// TODO: WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// TODO: WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page