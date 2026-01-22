//for loop
for(let i=1; i<=3; i++){
  console.log(i);
}

for(let i =5; i>=0;i--){
  console.log(i);
}

//odd number from 1 to 15
for(let i=1; i<=15; i+=2){
  console.log(i);
}

//multiplication table of 5
let n=prompt("Enter the number");
for(let i=1; i<=10;i++){
  console.log(`${n} X ${i} = ${n*i}`);
}

//while loop
let num=1;
while(num <=10){
  console.log(num);
  num++;
}

//loop on array
let fruits=["mango","banana","apple","lichi","pineapple"];
for(let i=fruits.length-1; i>=0;i--){
  console.log(i,fruits[i]);
}

// nested loop with nested arrays 
let name=[["harsh","yash","akansha"],["ayush","prince","pawan"],["anubhav","arpit","raj"]];
for(let i=0; i< name.length;i++){
  console.log(`list -> ${i}`);
  for(let j=0; j<name[i].length;j++){
    console.log(name[i][j]);
  }
}

//for-of loops
let name1=["harsh","yash","akansha","ayush","prince","pawan"];
for(names of name1){
  console.log(names);
}

for(char of "apnabhaiDono"){
  console.log(char);
}

// nested for of loop
let nam1=[["harsh","yash","akansha"],["ayush","prince","pawan"],["anubhav","arpit","raj"]];

for(list of nam1){
  
  for(naam of list){
    console.log(naam);
  }
}