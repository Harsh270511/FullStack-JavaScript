//.trim()
let msg1="  harsh maurya     ";
console.log(msg1.trim());


let pass= prompt("Enter your password");
console.log(pass.trim());
console.log(pass);

// .toUpperCase and .toLowercase
let name11="HarshMaurya";
console.log(name11.toUpperCase());
console.log(name11.toLowerCase());
console.log(name11.indexOf("Maurya"));


//method chaining
let naam="    HarshMaurya     ";
let newName= naam.toUpperCase().trim();
console.log(newName);


//slice
let msg ="apnaBhai";
console.log(msg.slice(0,4));
console.log(msg.slice(4));
console.log(msg.slice(-3  ));


//replace
let ms1= "HarshMaurya";
console.log(ms1.replace("Harsh","yash"));


//repeat
let kaam ="naam ";
console.log(kaam.repeat(3));

array 
let students= ["harsh", "Yash","Akansha","raj"];
students.length;
students[1][2];
students[1].length;

// array are mutable
let arr=["harsh","ayush","pricei"];
console.log(arr);
console.log(arr.length);
arr[1]="Maurya";
console.log(arr);
arr[10]="pooja didi";
console.log(arr.length);

//array method-> push, pop , shift, unshift
let cars= ["Audi", "ertiga","toyota","bmw"];
cars.push("Bolero"); //push
console.log(cars);
cars.unshift("Nano"); //unshift
console.log(cars);
cars.pop()          //pop
console.log(cars);
cars.shift();       //shift
console.log(cars)

// practice problem
let monts=["january","july","march","auguest"];
monts.shift();
monts.shift();
monts.unshift("june");
monts.unshift("july");
console.log(monts);


//indexOf, includes
let name1 = ["harsh", "maurya","yashveer","motaboss"];
console.log(name1.indexOf("motaboss"));
console.log(name1.includes("Harsh"));
console.log(name1.includes("harsh"));

//concat, reverse
let primary =["red","blue","pink"];
let secondary=["orange","yellow","lime"];
console.log(primary.concat(secondary));
console.log(secondary.concat(primary));
console.log(primary);
console.log(primary.reverse());
console.log(primary);
console.log(secondary.reverse());

//slice
let colors=["red","brown","pink","dark gray","gray","lime","orange"];
let anss = colors.slice(1,2);
console.log(anss);
let ans11 = colors.slice(-5,-2);
console.log(ans11);
let ans21 = colors.slice();
console.log(ans21);

//splice
let color1=["red","brown","pink","dark gray","gray","lime","orange"];
let ans0= color1.splice(4);
console.log(ans0);
console.log(color1);
let ans10= color1.splice(1,2);
console.log(ans10);
console.log(color1);
let ans2= color1.splice(0,1,"black","reddish yellow");
console.log(ans2);
console.log(color);
let ans3= color.splice(10,14);
console.log(ans3);

//sort
let colr=["red","brown","pink","dark gray","gray","lime","orange"];
let a= colr.sort();
console.log(a1);
let square=[25,16,4,49,36,9];
let ansa= square.sort();
console.log(anss);

//practice QS
let month =["january","july","march", "auguest"];
let ans = month.splice(0,2,"july","june");
console.log(month);
let lang=["c","c++","html","javascript","python","java","c#","sql"];
let ans1 = lang.reverse().indexOf("javascript");
console.log(ans1);


// Array referece 
let arr=['a','b'];
let arrCopy =arr;
console.log(arr==arrCopy);
arrCopy.push('c');
console.log(arr);
console.log(arrCopy);


// constant array 
const arr= [1,3,5,6];
console.log(arr.push(10));
console.log(arr.pop(1));
// arr=[2,1,2,1]; this will cause an error


//nested array
let nums =[[1,2],[2,4],[3,6],[4,8]];
console.log(nums);
console.log(nums[0]);
console.log(nums[2][1]);
console.log(nums.length);
console.log(nums[3].length);


// practice problem
let ticTack=[['X',"",'O'],['','X',''],['O','','X']];
console.log(ticTack);
