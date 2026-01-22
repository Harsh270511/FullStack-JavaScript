//forEach method
const { marker } = require("leaflet");
//Way-1
let arr1=[1,2,3,4,5];
console.log("This is way number 1");
let print = function(el){
  console.log(el);
};
arr1.forEach(print);
// Way-2
console.log("This is way number 2");
arr1.forEach(function(e1){
  console.log(e1);
});
//Way-3
console.log("This is way number 3");
arr1.forEach((e2)=>{
  console.log(e2);
});


//Object using forEach Method
let Info=[{
  name:"Harsh",
  marks:99.9
},{
  name:"Raj",
  marks:87.2
},{
  name:"jeesan",
  marks:92.1
}];
Info.forEach((student)=>{
  console.log(student);
  console.log(student.name);
  console.log(student.marks);
})


//Map
let arr2=[1,2,3,4,5];
let double = arr2.map((el)=>{
  return el *el;
});
let students1=[{
  name:"Harsh",
  marks:99.9
},{
  name:"Raj",
  marks:87.2
},{
  name:"jeesan",
  marks:92.1
}];
let gpa= students1.map((el)=>{
  return el.marks/10;
})


//Filter
let arr3=[1,4,2,3,4,5,77,7,9];
let oddNum=arr3.filter((el)=>{
  return el%2 !=0;
})

//Every
let ans4=[1,2,3,4].every((el)=> (el %2 ==0));
let ans5=[1,3,5,7].every((el)=>(el %2 !=0));

//some
let ans6=[1,2,3,4].some((el)=> (el %2 ==0));

//reduce
let arr7= [1,5,9,10];
let finalAns= arr7.reduce((result, element) => (result+element));
console.log(finalAns);

//Maximum number using reduce
let arr8=[1,83,54,39,973,823,29347,23223];

let maxAns= arr8.reduce((max, el) =>{
  if(max < el){
    return el;
  }else{
    return max;
  }
});
console.log(maxAns);

//practice question
let arr9=[10,20,30,40];
let ans = arr9.every((el)=>{
  return el%10==0;
})

//Practice question
let nums=[10,23,5,6,5,3,2];

function getMin(nums){
  let minAns = nums.reduce((min, el)=>{
  if(el < min){
    return el;
  }else{
    return min;
  }
});
return minAns;
}

//default value generally we don't assign 1st arg. as some default value
function sum(a,b=20){
  return a+b;
}
console.log(sum(1));

//spread
let arr01=[1,2,3,4,5,6,6,0,7,5,3,3,2,2,10];
Math.min(...arr01);
console.log(...arr01);

//spread array literals
let arr02=[1,2,4,5,6,7];
let newArr= [...arr02];
console.log(newArr);
console.log(newArr.push(111));
console.log(arr02);
console.log(newArr);
let curr=[..."Hello Harsh Maurya"];
console.log(curr);
//Ex--
let even=[2,4,6,8,10];
let odd=[1,3,5,7,9];
let commonArr=[...even, ...odd];
console.log(commonArr);


//spread object literals;
let data={
  email:"hasss@gmail.com",
  password:"abced",
}
let dataCopy={...data};
console.log(dataCopy);
let dataCopy1={...data,id:121,name:"harsh"};
console.log(dataCopy1);
//object as array and string
let arr=[1,2,3,4,5];
let object1= {...arr};
let object2={..."Harsh maurya"};

//rest
function sum(...args){
  for(let i=0; i< args.length;i++){
    console.log("you args us at: ",args[i]," times");
  }
}
function summation(...args){
    return args.reduce((res, el)=> res+el);
}
function val(msg, ...args){
  console.log(msg, args);
}

//Destructuring
let names=["harsh","Yash","Maurya","Rohit","raj","kaaj","baaj"];
// let winner=names[0];
// let runnerUp=names[1];
// let secondRunnerUp=names[2];
//same things may written in easy way using destructuring
let[winner, runnerUp, secondRunnerUp,...other]= names;

// DeDestructuring as object
const students={
  name:"harsh",
  password:"qwj1",
  subjects:["dsa","Toc","dbms","webD"],
  county:"India"
};
let{name, county}=students;
let{name:userName, county:place="Delhi"}=students;