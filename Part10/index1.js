// //DOM Event
// //onclick
// let btn= document.querySelector("button");
//Way-1
// btn.onclick= function(){
//   console.log("Button is click");
// };
//Way-2
// function sayHello(){
//   alert("Robot is saying Hello you uhh..");
// }
// btn.onclick= sayHello;

// //when we have to select multiple buttons
// let btns= document.querySelectorAll("button");
// for(btn of btns){
//   btn.onclick = sayHello;
//   btn.onmouseenter=function(){
//     console.log("You entered a button");
//   }
// }
// function sayHello(){
//   alert("Robot is saying Hello you uhh..");
// }
// btn.onclick= sayHello;

//EventListener
let btns = document.querySelectorAll("button");
for(btn of btns){
  // btn.addEventListener("click",sayHello);
  // btn.addEventListener("click",sayName);
  btn.addEventListener("dblclick",function(){
    console.log("You double click me!");
  })
}
function sayHello(){
  alert("Saying hello to uhh...");
};
function sayName(){
  alert("calling your name");
};