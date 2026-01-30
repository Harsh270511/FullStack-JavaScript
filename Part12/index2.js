// //JSON.parse(data)-->convert json data to js object
// let jsonRspns='{"fact":"The fact is in such a way that no one is able to listen it","age":"The age of that data is 1000Millions Years"}';
// let validJson=JSON.parse(jsonRspns);
// console.log(validJson);
// console.log(validJson.fact);

// //JSON.stringify(data)-->convert js object to json
// let student={
//   name:"harsh Maurya",
//   age:21,
//   batch: 2028
// };
// console.log(JSON.stringify(student));


// //Our First request using fetch(url)
// //fetch(url)
// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//   // console.log(res);
//   return res.json();
// })
// .then((data)=>{
//     console.log("data1: ", data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//   return res.json();
// })
// .then((data2)=>{
//     console.log("data2: ", data2.fact);
// })
// .catch((err)=>{
//   console.log("error is ",err);
// });
// console.log("I love coding");

// //Our First request using fetch(url) using async and await
let url = "https://catfact.ninja/fact";
async function getFacts() {
  try{
    let res= await fetch(url);
    let data= await res.json();
    console.log(data.fact);

    let res1= await fetch(url);
    let data1= await res1.json();
    console.log(data1.fact);
  }catch(e){
    console.log("error is:::::", e);
  }
}