const fav= "kgf";
let guess= prompt("Enter your fav movie");
let newGuess= guess.toLowerCase();

while(newGuess != fav){
  if(newGuess == "quit"){
    console.log("you quit ");
    break;
  }
  newGuess=prompt("wrong ans!, please try again").toLowerCase();
} 
if(newGuess == fav){
  console.log("Congrate!!");
}