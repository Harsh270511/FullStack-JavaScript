const input= prompt("Enter the maximum number:");
const num = Math.floor(Math.random() * input)+1;
let userInputGuess = prompt("Enter the guess number ");
while(true){  
  if(userInputGuess=="quit"){
    console.log("you are quiting the game");
    break;
  }
  if(userInputGuess ==num){
    console.log("Congrate !! your number is match with random number");
    break;
  }else if(userInputGuess >num){
    userInputGuess=prompt("Hint: your guess number is large");
  }else {
    userInputGuess= prompt("Hint: your guess number is small");
  }
 
}