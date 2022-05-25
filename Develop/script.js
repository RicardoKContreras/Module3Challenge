// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element

// Write password to the #password input
 function writePassword() {
  
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  
  passwordText.value = password;
  
 }
 
 
 generateBtn.addEventListener("click", writePassword);{
 eliminateCommas 
 }



  
  function generatePassword(){
  var promptLength = window.prompt("How many characters would you like? The number has to be between 8 and 128.");


  
    if (promptLength < 8 || promptLength > 128){
      window.alert("Please choose a number between 8 and 128 characters");
      
      generatePassword();
    }

    var characterUpper = confirm ("Do you want uppercase?");
      var characterLower = confirm ("Do you want lowercase?");
      var characterStyle = confirm ("Do you want special characters?");
      var numbers =  Numbers();
      function Numbers() {
        var numbers = confirm ("Do you want numbers?");
          return numbers;
    
      }

      if (!characterUpper && !characterStyle && !characterLower && !numbers) {
          window.alert("Please choose at least one character style.");
          generatePassword();
      }
   var characterPassword = passwordInit(promptLength,characterLower,characterUpper,characterStyle,numbers);
   var eliminateCommas = characterPassword.join("");
   window.alert(eliminateCommas);
   return eliminateCommas;
    
    
   
   
   

    }
    
    function generateRandomAlphabet() {
      var letters = "abcdefghijklmnopqrstuvwxyz"
    
      return letters[Math.floor(Math.random() * letters.length)]
    }

    function generateRandomSymbol() {
      var specialCharacter = "!@#$%&*)("
    
      return specialCharacter[Math.floor(Math.random() * specialCharacter.length)]
    }

  function passwordInit(pL,cL,cU,cS,num) {
    var character = new Array(pL);
    
    var uppercaseAssigned = false;
    var lowercaseAssigned = false;
    var specialcharacterAssigned = false;
    var numberAssigned = false;
    for (var i = 0; i< pL; i++) {

         if (cU && !uppercaseAssigned) {
          character[i] = generateRandomAlphabet().toUpperCase();
          uppercaseAssigned = true;
        }
      else if (cL && !lowercaseAssigned){
          character[i] = generateRandomAlphabet().toLowerCase();
          lowercaseAssigned = true;
        }
        else if(cS && !specialcharacterAssigned){
          character[i] = generateRandomSymbol();
          specialcharacterAssigned = true;
        }

        else if(num && !numberAssigned) {
          character[i] = Math.floor(Math.random() *10);
          numberAssigned = true;
        }
        else {
          uppercaseAssigned = false;
          lowercaseAssigned = false;
          specialcharacterAssigned = false;
          numberAssigned = false;
          i--;
        } 

         
      }
       return character;

      
    
  }
   
  
    
      
    
   
    
  
    
    
  
    
   
  

  


  
   

    

    

  
  
  
    

  
  
 



// Add event listener to generate button


