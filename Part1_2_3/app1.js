let color1="green";
if(color1=="red"){
  console.log("Stop");
}
else if(color1=="yellow"){
  console.log("start your vehicals");
}else{
  console.log("Let's go");
}


// practice question 
let size="L";

if(size==="XL"){
  console.log("Price is Rs. 250");
}else if(size==="L"){
  console.log("Price is Rs. 200");
}else if(size==="M"){
  console.log("Price is Rs. 100");
}else{
  console.log("Price is Rs. 50");
}

//practice question
let str="arsh";
if(str[0]==='a' && str.length >3){
  console.log("good string");
}else{
  console.log("Bad string");
}

if(""){
  console.log("this is true");
}else{
  console.log("This is false");
}

//switch statement
let color="green";
switch(color){
  case "red":
    console.log("stop in the name of lock");
    break;
  case "yellow":
    console.log("start your vehicals");
    break;
  default:
    console.log("No traffice light");
}

//practice question
let day =5;
switch(day){
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("Invalid days");
}
//alert and .error, warning
console.log("this is the simple log");
console.error("this is the error log");
console.warn("this is the warning msg");
alert("this is an alert message");

//prompt for taking input from the user
let firstName= prompt("Enter your name");
console.log(firstName);