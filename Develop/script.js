// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
 function writePassword() {

  var symbolOne = "!"
  var symbolTwo = "@"
  var symbolThree = "#"
  
  
  var promptLength = window.prompt("How long would you like your password?");
  
    if (promptLength < 8 || promptLength > 128){
      window.alert("Please choose a number between 8 and 128 characters");
      writePassword();
      

  }
  
    else { 
      window.prompt("Now, What character types would you like: " + symbolOne + "," + symbolTwo + "," + symbolThree);
    }

    var someFar = promptLength + symbolOne;
    window.alert(someFar);

      

  
     
      

    


    

  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
 writePassword();

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);