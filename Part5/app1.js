//object literals
//ex-1
const student1={
  name:"harsh",
  age: 20,
  gender: "male",
  marks: 99.9
};

//ex-2
const random={
  price:100,
  colors:["red","voilet","lime","gray"],
  discound:32
};

//Thread/twitter post
const post={
  userName: "Harsh maurya",
  content:"this is my last post of this year",
  likes: 1000 +"k",
  repost: 10,
  tags:["@harshBhai","@akku","@chotu"]
};

//get values
console.log(post["userName"]);
console.log(post.userName);
console.log(post.tags);
console.log(post.tags[0]);

//get value with [] and .(dot)
const student={
  1:"a",
  2:"b",
  null: "c",
  undefined:"d",
  false:"e"
};
// console.log(student.1);//this is an error
console.log(student[1]); //here 1 is not a number nor index its an string 
console.log(student.null);
console.log(student[undefined]);

//Add and Update values in object literals
let raw ={
  naam: "Harsh",
  age:21,
  weight:76,
  city: "Pune"
};
raw.city="delhi";
raw.gender="Male";
raw.weight=[12,34,23,12,45,67];
delete raw.naam;

//Object of Objects we add and update all these same as above
const classInfo1={
  harsh:{
    grade:"D",
    weight:55
  },
  raju:{
    grade:"A+",
    weight:65
  },
  kaju:{
    grade:"B",
    weight:51
  }
}
console.log(classInfo1.harsh);
console.log(classInfo1.harsh.grade);


//Array of Object
const classInfo=[
  {
    name1: "harsh",
    grade:"D",
    weight:55
  },
  { name1: "raju",
    grade:"A+",
    weight:65
  },
  { name: "kaju",
    grade:"B",
    weight:51
  }
];
console.log(classInfo);
console.log(classInfo[1]);
console.log(classInfo[0]);
let naam= classInfo[0].name1= "pagli";
console.log(classInfo);
console.log(classInfo[0]["name1"]);
classInfo[1].gender="Male";
console.log(classInfo);

//Math Object
console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(-12));
console.log(Math.abs(12));
console.log(Math.pow(2,4));
console.log(Math.floor(23.5));
console.log(Math.floor(23.99999));
console.log(Math.ceil(23.999));
console.log(Math.ceil(23.000001));
console.log(Math.random());
let nums= Math.random();
nums= nums*10;
nums = Math.floor(nums);
console.log(nums);

//Short from to generate a number 
let num= Math.floor(Math.random() * 100)+1;
console.log(num);
let num1=Math.floor(Math.random() * 5)+1;
console.log(num1);


