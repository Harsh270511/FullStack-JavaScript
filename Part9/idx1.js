////document.getElementById(id)---->return object


////document.getElementByClassName(id)--->return Collection
// let colImg= document.getElementsByClassName("oldImg");
// for(let i =0; i<colImg.length;i++){
//   console.dir(colImg[i]);
// }


////document.getElementByTagName(id)--->return Collection


////querySelector()
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("p"));
// console.dir(document.querySelectorAll("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll(".oldImg"));
// console.dir(document.querySelector("div li a"));


////Using properties
// let content= document.querySelector("h1");
// console.dir(content.innerText);
// console.dir(content.textContent);
// console.dir(content.innerHTML);
// content.innerText="Hii this is harsh maurya";
// content.innerHTML="Hii this is <b>Harsh</b> <i>Maurya</i>";
// content.innerHTML=`<u>${content.innerText}</u>`;


// //getters and setters(Manipulation)
// let img= document.querySelector('img');
// console.dir(img.getAttribute('id'));
// console.log(img.setAttribute("id","spiderManimg"));
// img.setAttribute('src','assets/creation_3.jpeg');
// img.setAttribute('class','imageClass');
// img.getAttribute('class');


// //style property
// let img = document.querySelector('img');
// console.dir(img);
// console.dir(img.style);
// let head= document.querySelector('h1');
// console.dir(head);
// let changingColor= head.style.color="yellow";
// console.dir(changingColor);
// let bgColor= head.style.backgroundColor="black";

// //style property
// let links=document.querySelectorAll(".box a");
// //way-1
// for(let i=0; i<links.length;i++){
//   links[i].style.backgroundColor="black";
//   links[i].style.color="yellow";
// }
// //way-2
// for(link of links){
//   link.style.backgroundColor="black";
//   link.style.color="blue";
// }


// //using classList
// let image= document.querySelector('img');
// console.log(image.classList);
// image.classList.add("imge1");
// console.log(image.classList);
// let heading= document.querySelector('h1');
// heading.classList.add("aqua");
// heading.classList.remove("aqua");
// heading.classList.contains("aqua");
// heading.classList.toggle("aqua");
// heading.classList;


// //Navigation
// ////Ex-1
// let heading= document.querySelector('h4');
// console.dir(heading.parentElement);
// ////Ex-2
// let divv= document.querySelector('div');
// console.log(divv.children);
// console.log(divv.childElementCount);
////Ex-3
// let sib = document.querySelector('ul');
// console.log(sib.parentElement);
// console.log(sib.childElementCount);
// console.log(sib.children);
// console.dir(sib.children[1].previousElementSibling);
// console.log(sib.children[1].nextElementSibling);


// //Adding elements
let newP= document.querySelector('p');
newP.innerText="Hii this is the new paragraph element tag";
newP.append("I join late");
let box=document.querySelector('.box');
box.appendChild(newP);
let btn = document.createElement('button');
btn.innerText="click me!";
box.appendChild(btn);
// newP.insertAdjacentElement('beforebegin',btn);a
// newP.insertAdjacentElement('afterbegin',btn);
// newP.insertAdjacentElement('beforeend',btn);
// newP.insertAdjacentElement('afterend',btn);
// btn.remove();
// let body= document.querySelector('body');
// body.remove();