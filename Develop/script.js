// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element

// Write password to the #password input
 function writePassword() {
  
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 }
 generateBtn.addEventListener("click", writePassword);

 



  
  function generatePassword(){
  var promptLength = window.prompt("How many characters would you like? The number has to be between 8 and 128.");
  
  
    if (promptLength < 8 || promptLength > 128){
      window.alert("Please choose a number between 8 and 128 characters");
      
      generatePassword();
    }

    var characterUpper = confirm ("Do you want uppercase?");
      var characterLower = confirm ("Do you want lowercase?");
      console.log("characterlowering shows " + characterLower);
      var characterStyle = confirm ("Do you want special characters?");
      var numbers =  Numbers();
      console.log(numbers + " This is the numbers");

      if (!characterUpper && !characterStyle && !characterLower && !numbers) {
          window.alert("Please choose at least one character style.");
          generatePassword();
      }
      passwordInit(promptLength,characterLower,characterUpper,characterStyle,numbers)
    }
  function passwordInit(pL,cL,cU,cS,num) {
    var character = new Array(pL);
    for (var i = 0; i< pL; i++) {
      
        console.log();
      }

    
  }
    function Numbers() {
    var numbers = confirm ("Do you want numbers?");
      return numbers;

  }
  
    
      
    
   
    
  
    
    
  
    
   
  

  


  
   

    

    

  
  
  
    

  
  
 



// Add event listener to generate button


