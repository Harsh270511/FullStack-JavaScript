// //Understanding the concept of stack----->
// function one(){
//   return 1;
// }
// function two(){
//   return one()+one();
// }
// function three(){
//   let ans = two() + one();
//   console.log(ans);
// }
// three();


// // //Js is Single thread---->
// setTimeout(() =>{
//   console.log("Harsh Maurya");
// },2000);
// console.log("Hello....");


// //Problem occure due to Asynchronus nature---->
////..1 Callback hell---> callback nesting
// let head= document.querySelector("h1");
// function changeColor(color, delay, nextColor){
//   setTimeout(()=>{
//     head.style.color=color;
//     if(nextColor) nextColor();
//   },delay);
// }
// changeColor("red",1000,()=> {
//   changeColor("lime",1000, ()=> {
//     changeColor("green",1000, ()=> {
//       changeColor("yellow", 1000)
//     });
//   });
// });
// //other way->
// setTimeout(()=>{
//   head.style.color ="lime";
// },1000);
// setTimeout(()=>{
//   head.style.color ="red";
// },2000);
// setTimeout(()=>{
//   head.style.color ="blue";
// },3000);

// //the above code is written in promise formate---->
// let head= document.querySelector("h1");
// function changeColor(color, delay){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       head.style.color=color;
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
// changeColor("red",1000,()=> {
//   changeColor("lime",1000, ()=> {
//     changeColor("green",1000, ()=> {
//       changeColor("yellow", 1000)
//     });
//   });
// });
// //Promise::>first we look how callback hell is created as it is asynchronous nature----->
// function saveToDb(data,success, failure){
//   let internetSpeed=Math.floor(Math.random()*10)+1;
//   if(internetSpeed >4){
//     success();
//   }else{
//     failure();
//   }
// }
// saveToDb("harsh maruya",()=>{
//   console.log("success: your data is saved");
//   saveToDb("Hello duniya", ()=>{
//     console.log("success2: data2 is saved");
//     saveToDb("ky haal haai", ()=>{
//       console.log("success3: data3 is saved");
//     },()=>{
//       console.log("failure3: weak connection");
//     })
//   },()=>{
//     console.log("failure2: weak connection");
//   })
// },()=>{
//   console.log("failure: Weak connection..data is not saved");
// });

// //Resolving the above callback hell using Promise::------>
// function saveToDb(data){
//   return new Promise((resolve, reject) =>{
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//       resolve("data was saved");
//     }else{
//       reject("weak connection ");
//     }
//   });
// }
// let request= saveToDb("harsh"); we use this or the just below line----->
// saveToDb("Maurya jii")
// .then(()=>{
//   console.log("Promise accepted");
// })
// .catch(()=> {
//   console.log("Promise rejected");
// })

// //Promise improved version---->
// saveToDb("Maurya jii")
// .then(()=>{
//   console.log("data1 was accepted");
//   return saveToDb("hello harsh");
// })
// .then(()=>{
//   console.log("data2 was saved");
//   return saveToDb("maurya yash don");
// })
// .then(()=>{
//   console.log("data3 was accepted");
// })
// .catch(()=> {
//   console.log("Promise rejected");
// })

// //promise are rejected and resolve with some data(valid result or error)---->
// saveToDb("Maurya jii")
// .then((result)=>{
//   console.log("data1 was save");
//   console.log("result: ",result);
//   return saveToDb("hello harsh");
// })
// .then(()=>{
//   console.log("data2 was saved");
//   console.log("result: ",result);
//   return saveToDb("maurya yash don");
// })
// .then(()=>{
//   console.log("data3 was accepted");
//   console.log("result: ",result);
// })
// .catch((error)=> {
//   console.log("error: ", error);
//   console.log("Promise rejected");
// })

