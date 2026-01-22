console.log("Hello maurya jii!");
let a=12;
let b =18;
console.log("the totol sum is: ", a+b);

//template literals
let aloo=10;
let onion= 30;
// let ans= "the totol price of the veg. is"+(aloo+onion)+"rupees."
let ans = `The totol price of the veg. is ${aloo + onion} rupees.`;
console.log(ans);

if(onion > 18){
  console.log("Price is low");
}else{
  console.log("Price is high");
}