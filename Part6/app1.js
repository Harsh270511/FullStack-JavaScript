//Basic funtion syntax
function greeting(){
  console.log("Hello Harsh Maurya");
}
greeting();
function printNum(){
  for(let i =0; i<10;i++){
    console.log(i);
  }
}
printNum();


//practice problem
function poem(){
  console.log("Preety little baby...aweewwe , let the flower  in the sun set ");
}
poem();


//practice problem
function dice(){
  let rollDice= Math.floor((Math.random()*6) + 1);
  console.log(rollDice);
}
dice();


//function using argument
Ex-1
function personInfo(name, age){
  console.log(`${name} age is ${age}`);
}
personInfo("Harsh", 20);
Ex-2
function sum(num1 , num2){
  console.log(`the sum of two number is ${num1+num2}`);
}
sum(12,10);


//practice problem
function avg( num1, num2, num3){
  let AvgOfNum= (num1 + num2 + num3)/3;
  console.log(AvgOfNum);
}
avg(10,10,10);


// practice problem 
function table(num){
  for(let i=1;i<=10;i++){
    console.log(`${num} X ${i} = ${num * i}`);
  }
}
table(6);


//Return 
Ex-1
function sum(num1,num2){
  return num1+ num2;
}
let an=sum(12,34);
//console.log(ans);  
console.log(sum(sum(10,10),50));
Ex-2
function isAdult(age){
  if(age >=18){
    return "adult";
  }else{
    return "not adult";
  }
  console.log("This will never reach");
}

//problem
function sumN(num){
  let sum=0;
  for(let i=1; i<=num;i++){
    sum+=i;
    
  }
  return sum;
}
let ans= sumN(10);
console.log(ans);

// //Problem
let str =["My","Name","is","harsh","maurya"];
function concatStr(str) {
  let ans="";
  for(let i =0; i<str.length; i++){
    ans +=str[i];
  }
  return ans;
}
let result = str.reverse().join();
console.log(result);


//Function and Global scope
let sum=90;//Global scope
function calSum(a ,q){
  let sum = a+q;//Function scope
  console.log(sum);
}
calSum(1,9);
console.log(sum);

//Block scope
let age=12;
if(age >=19){
  let str="adult";
}
console.log(str);


//lexical 
function outer() {
  let a=12;
  let b=89;
  function inner() {
    console.log(a);
  }
  inner();
}
//Lexical scope-->Hoisting in javaScript
function outer() {
  function inner() {
    console.log(a);
  }
  let a=12;
  let b=89;
  
  inner();
}

//Function expression
let sum= function(a, b){
  return a+b;
}
sum(1,1);

//High Order function
function multipleGreet(func, count){
  for(let i =1; i<=count ;i++){
    func();
  }
}
let greet = function(){
  console.log("Hello harsh");
}
multipleGreet(greet,10);

//High Order function( return funtion)
let odd= function(n){
  console.log(!(n%2==0));
}
let even = function(n){
  console.log(n%2==0);
}

function evenOddFactory(result){
  if(result=="odd"){
    return function(n){
      console.log(!(n%2==0));
    }
  }else if(result=="even"){
    return function(n){
      console.log(n%2==0);
    }
  }
  else{
    console.log("wrong input  ");
  }
}
// let result="odd";
let func=evenOddFactory("even");

//Methods
let calculator={
  add: function(a,b){
    return a+b;
  },
  sub: function(a,b) {
    return a-b;
  },
  mutli:function(a,b) {
    return a*b;
  }
};
calculator.add(12,1);
calculator.sub(12,1);
calculator.mutli(12,1);