// // Async keyword----->
// async function greet(){
//   throw "404 error page was not found";
//   return "Hello harsh bhai";
// }
// greet()
// .then((result)=>{
//   console.log("Promise is exected successfully");
//   console.log("result was: ", result);
// })
// .catch((err)=>{
//   console.log("Promise was rejected");
//   console.log("error was: ", err);
// })
// let hello = async()=>{
//   return 10;
// };

// //Await keyword---->
// function getNum(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       let num = Math.floor(Math.random()*10)+1;
//       console.log(num);
//       resolve();
//     },1000);
//   });
// };
// async function setNum(){
//   await getNum();
//   await getNum();
//   await getNum();
// }

//color change function which I used in part11 now I write with help of async and await---->
// let head= document.querySelector("h1");
// function changeColor(color, delay){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       let num =Math.floor(Math.random()*5)+1;
//       if(num >3){
//         reject("Promise was rejected");
//       }
//       head.style.color=color;
//       console.log(`color changes to ${color}`);
//       resolve("Color changed!!!")
//     },delay);
//   });
// }
// changeColor("red",1000)
// .then(()=>{
//   console.log("red color is changed completly");
//   return changeColor("lime",1000);
// })
// .then(()=>{
//   console.log("Lime color is changed completly");
//   return changeColor("blue",1000);
// })
// .then(()=>{
//   console.log("blue color is change completly");
// })
// //writing the fxn with the help of async and await
// async function demo() {
//   try{
//     await changeColor("red", 1000);
//     await changeColor("lime", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("blue", 1000);
//   }catch(error){
//     console.log("error is caught");
//     console.log(error);
//   }

//   let val=7;
//   console.log(val);
// }