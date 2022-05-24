// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element

// Write password to the #password input
 function writePassword() {
  
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 }
 

 
  var symbol = ["!", "@", "#"]
  var lowerCase = "lowercase"
  var upperCase = "uppercase"
  var allCase = "Both"
  var numericValue = Math.floor(Math.random() *10);
  console.log(numericValue);
  
  
  
  function generatePassword(){
  var promptLength = window.prompt("How long would you like your password?");
  
    if (promptLength < 8 || promptLength > 128){
      window.alert("Please choose a number between 8 and 128 characters");
      console.log(promptLength);
      generatePassword();
      

  }
  
  

    else if (promptLength >= 8 || promptLength <= 128){
      window.alert("Next is style.");
      
    }
    function Numbers() {
    var numbers = confirm ("Do you want numbers?");

    if (numbers === true){
      console.log(numericValue);
      
    
    }

    
      
    }
    Numbers();
    function Styles(){
    

    
      var passwordCase = window.prompt("Would you like uppercase, lowercase, or both?")
    

    if (passwordCase === "lowercase" || passwordCase === "LOWERCASE"){
      console.log(lowerCase);
    }

    if(passwordCase === "uppercase" || passwordCase === "Uppercase"){
      console.log(upperCase);
    }

    else if (passwordCase === "both" || passwordCase === "BOTH") {
      console.log(allCase);
    }

    else {
      window.alert("Please choose an answer");
     
    }
    
  }
  Styles();
    
    //var passwordContent = [promptLength, numericValue];
  //console.log(passwordContent);

    

    var someFar = promptLength + symbol[2];
    window.alert(someFar);

    
  
  
}
   

    generateBtn.addEventListener("click", writePassword);

    

  writePassword();
  generatePassword();
 
    

  
  
 



// Add event listener to generate button


