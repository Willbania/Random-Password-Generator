//Assignment Code
//Provided - this code targets the generate ID button in html
var generateBtn = document.querySelector("#generate");

//We're supposed to write a function to generate password
//I wrote this function here to satisfy logic requirements for project

function generatePassword (){
 
  var keystroke = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }
// I wanted to console log everything so that I know if the code is running properly
console.log("keystore", keystroke); 

  var result=""; 
  var listOfCharacters = ""; 
  //tested this page to be sure it's connected properly
  console.log("confirmation page works");

  // prompted user to enter values
  var userinput = parseInt(prompt ("Please enter the number of characters for your password between 1-128"));
  // We validate the userinput to confirm it is a numerical value
  while (!/^[0-9]+$/.test(userinput)) {
    confirm ("You did not enter a number, would you like to try again");
    userinput = prompt ("Please enter the number of characters for your password between 1-128");
    }
  

  // write a condition for min length and max length of password
  // reset page if outside range to start over
  if(userinput < 8 ) {
    alert ("ERROR ALERT!!! Must enter a numerical value greater than 8...try again");
    onclick (window.location.reload());
    console.log (userinput);
  } 
  
  if (userinput > 128) {
  alert ("ERROR ALERT!!! Must enter a numerical value less than 128...try again");  
  onclick(window.location.reload());
  console.log(userinput); 
  } 
 
  // 1 of 4 confirm boxes (must confirm at least 1 of 4)
  // try a for loop here to re-run code until proper entries
   var allowNumbers = confirm("Would you like to include numbers ?"); 
   console.log("allow Numbers ", allowNumbers);

   if(allowNumbers === true){
    listOfCharacters = listOfCharacters + keystroke.number; 
   }
   console.log(listOfCharacters);
  // 2 of 4 confirm boxes
   var allowLowerCase = confirm("Would you like to include lowercase characters  ?"); 
   console.log("allow lowercase ", allowLowerCase);

   if(allowLowerCase === true){
    listOfCharacters = listOfCharacters + keystroke.lower; 
   }

   console.log(listOfCharacters);

   // 3 of 4 confirm boxes
   var allowUpperCase = confirm("Would you like to include uppercase characters  ?"); 
   console.log("allow uppercase ", allowUpperCase);

   if(allowUpperCase === true){
    listOfCharacters = listOfCharacters + keystroke.upper; 
   }

   console.log(listOfCharacters);

   // 4 of 4 confirm boxes
   var allowSymbolCase = confirm("Would you like to include special characters  ?"); 
   console.log("allow special ", allowSymbolCase);

   if(allowSymbolCase === true){
    listOfCharacters = listOfCharacters + keystroke.symbol; 
   }
    else {alert ("Please Note, you must select at least 1 of the 4 conditions or try again");
    }

   console.log(listOfCharacters);

   // need to write an error message if false is selected each time
 
   for(var index = 0; index < userinput; index++){
    console.log("Loop running", index ); 
    //generate a random index from the list of characters allowed based on the confirm boxes 
    var randomIndex = Math.floor(Math.random() * listOfCharacters.length) ; 
    //generate random letter from the string using charAt(); 
    var randomLetter= listOfCharacters.charAt(randomIndex); 
   
    console.log("the character index is ", randomIndex, " letter generated is ", randomLetter); 

    //append the random letters every time the loop runs 
    result = result+randomLetter;

   }
  
  return result; 
}

//provided - this calls the value of write password
function writePassword() {
  //provided - stores formula to generate password but there is no function (need to write function)
  var password = generatePassword();
  //provided - this is the card where the generated password displays on html
  var passwordText = document.querySelector("#password");
  //provided - this line takes the generated password and displays on to screen
  passwordText.value = password;
}
// provided - Add event listener to generate button to call final answer of writePassword
generateBtn.addEventListener("click", writePassword) ;

