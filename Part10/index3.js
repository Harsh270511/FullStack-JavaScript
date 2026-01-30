// //eventlistener
// let para= document.querySelector("p");
// para.addEventListener("click", function(){
//   console.log("Para is clicked");
// });
// let box = document.querySelector("div");
// box.addEventListener("mouseenter", function(){
//   console.log("You click div");
// })


// //this in eventlistener
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// function changeColor(){
//   console.dir(this.innerText);
//   this.style.backgroundColor="lime";
// }
// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);


// //keyboard events
// //Ex-1
// let btn = document.querySelector("button");
// btn.addEventListener("click", function(e){
//   console.log(e);
//   console.log("button is clicked");
// })
// //Ex-2
// let ip= document.querySelector("input");
// ip.addEventListener("keydown",function(e){
//   // console.log(e.key);
//   console.log(e.code);
//   if(e.code=="KeyU"){
//     console.log("Charcter is moving upword");
//   }else if(e.code=="ArrowDown"){
//     console.log("Charcter is moving backword");
//   }else if(e.code=="ArrowLeft"){
//     console.log("Charcter is moving left");
//   }else if(e.code=="ArrowRight"){
//     console.log("Charcter is moving right");
//   }else{
//     console.log("Invalid direction");
//   }
  // console.log("Key is pressed");
// });
// ip.addEventListener("keyup", function(){
//   console.log("key is released");
// });