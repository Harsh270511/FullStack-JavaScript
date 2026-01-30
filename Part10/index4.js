// let farm= document.querySelector("form");
// farm.addEventListener("submit", function(e){
//   e.preventDefault();
//   alert("form submit");
// });

// //Extracting form data
// //ex-1
// let form= document.querySelector("form");
// form.addEventListener("submit", function(event){
//   event.preventDefault();
//   let ipt= document.querySelector("input");
//   console.dir(ipt);
//   console.log(ipt.value);
// });
// //ex-2
// let form1= document.querySelector("form");
// form1.addEventListener("submit", function(event){
//   event.preventDefault();
//   let userName= document.querySelector("#user");
//   let password= document.querySelector("#pass");
//   console.log(`User: ${userName.value}`);
//   console.log(`Password: ${password.value}`);

//   alert(`Hii ${userName.value} your password is ${password.value}`);
// });
// // same way to to ex-2 in another and more usefull way
// let form2= document.querySelector("form");
// form2.addEventListener("submit", function(event){
//   event.preventDefault();
//   console.dir(form2);
//   let userName= form2.elements[0]; //==this.elements[0]
//   let password= form2.elements[1]; //==this.elements[1]
//   console.log(`User: ${userName.value}`);
//   console.log(`Password: ${password.value}`);

//   alert(`Hii ${userName.value} your password is ${password.value}`);
// });

//change event
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
  event.preventDefault();

});
let user = document.querySelector("#user");
user.addEventListener("change", function(){
  console.log("change event");
  console.log("Final value of change event is: ",user.value);
});
let userName = document.querySelector("#user");
user.addEventListener("input", function(){
  console.log("input event ");
  console.log("Final value of input event is: ",user.value);
});