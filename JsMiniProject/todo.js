let btn = document.querySelector("button");
let ipt=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click", function(){
  let list= document.createElement("li");
  list.innerText=ipt.value;

  let delBtn=document.createElement("button");
  delBtn.innerText="Delete";
  delBtn.classList.add("delete");

  list.appendChild(delBtn);
  ul.appendChild(list);
  ipt.value="";
});
ul.addEventListener("click", function(event){
  if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log("delete");
  };
});

// let btnDel=document.querySelectorAll(".delete");
// for(del of btnDel){
//   del.addEventListener("click", function(){
//     let par= this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// };
