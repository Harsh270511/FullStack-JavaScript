let ipt= document.querySelector("#text");
let para= document.querySelector("p");
ipt.addEventListener("input", function(){
  console.log(ipt.value);
  para.innerText= ipt.value;
});