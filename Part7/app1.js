//this keyword
const Info={
  name:"Harsh",
  age:20,
  eng:82,
  phy:92,
  math:68,
  getAvg(){
    console.log(this);
    let avg=(this.eng+ this.phy+ this.math)/3;
    console.log(avg);
  }
}
function getAvg(){
  console.log(this);
}

// Interview questions 
let arr=[1,10,18,14,6];
function abc(b,...a){
  console.log(a);
}
abc(8,9,10,11,12);

let a=2;
let b=10;

a= a^b;
b=a^b;
a=a^b;
console.log(a);
console.log(b);

let a1=[1,2,3,4,5];
let a2=[3,4,5,9,8];

function findIntersection(a1,a2){
  let result=[];
  for(let i=0; i<a1.length; i++){
    if(a2.includes(a1[i])){
      result.push(a1[i]);
    }
  }
  return result;
}
console.log(findIntersection(a1,a2));

//try and catch
console.log("This is harsh1");
console.log("This is harsh1");

try{
  console.log(a);
} catch(error){
  console.log("Error catch..a is missing");
  console.log(error)
}
console.log("This is harsh2");
console.log("This is harsh2");

//Miscellaneous function
const sum=(a,b)=>{
  console.log(a+b);
};
const square1=(n) =>{
  return n*n;
};
const pow= (a,b) =>{
  return a**b;
};

//Implicite return
const divide=(a,b)=>(a / b);

//setTimeour
console.log("Hii buddy");
setTimeout(() => {
  console.log("Harsh  Maurya")
}, 3000);
console.log("Welcome Mr. ");

//setInterval
let id1= setInterval(() =>{
  console.log("harsh Maurya");
  },3000);
console.log(id1);
clearInterval(id1);//this will help to stop executing "id"

//this as arrow function and function
const student={
  name:"harsh",
  age:20,
  prop:this,
  getName: function() {
    return this.name;
  },
  getAge:() => {
    console.log(this);
    return this.age;
  },
  getInfo1: function(){
    setTimeout(() => {
      console.log(this)//student object hai
    },2000)
  },
  getInfo2:function(){
    setTimeout(function() {
      console.log(this)//window object hai
    },2000)
  }
}

//practice question
const square=n =>(n*n);

//practice question
let id= setInterval(() =>{
  console.log("Hello world");
},2000);

setTimeout(()=>{
  clearInterval(id);
  console.log("Clear interval executed");
},10000);