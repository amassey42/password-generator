// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
//Arrays of  numbers, special, upper and lowercase letters
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialList =["!", "@", "#", "$", "%", "^", "&", "*" ,"(", ")"];
var lowerCaseList =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
var upperCaseList =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


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
  //when button is clicked Prompt user for length
  var charLength = prompt("How many characters do you want your password between 8 and 128?");
  Number.isinteger(Number.parseint(charLength));
  //check password length is between 8 and 128
  if (charLength <8 || charLength >128){
    prompt("Choose a number between 8 and 128.")
  }

  //prompt confirm types of characters
  //store the users response
  //based on response build available pool of characters
  //Build password
  
    
    // if (charLength !== isNaN) {
    //   prompt("Please enter a number.")
    // }
    // else if (charLength < 8 || charLength > 128) {
    // prompt("Please choose between 8 and 128 characters")
    // }else if (charLength >= 8 || charLength <=128)
    // return 
  
    // console.log(charLength)
    return "password"
  }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// GIVEN I need a new, secure password
// TODO: WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// TODO: WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// TODO: WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// TODO: WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// TODO: WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// TODO: WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// TODO: WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page