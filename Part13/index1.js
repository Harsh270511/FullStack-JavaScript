//cat fact  using api
let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
  let fact =await getFacts();
  console.log(fact);
  let p=document.querySelector("#result");
  p.innerText=fact;
})

let url ="https://catfact.ninja/fact";

async function getFacts() {
  try{
    let res=await axios.get(url);
    return res.data.fact;
  }catch(e){
    console.log(e);
    return "No facts Found";
  }
}


//Getting image of random dog  image using api
let btn1=document.querySelector("button");
let url2= "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click", async ()=>{
  let link=await getRandomImage();
  let image=document.querySelector("#result");
  image.setAttribute("src",link);
})
async function getRandomImage() {
  try{
    let res= await axios.get(url2);
    return res.data.message;
  }
  catch(e){
    console.log("Error is",e);
    return "No image found";
  }
}


//Axios sending headers
let url3="https://icanhazdadjoke.com/";

async function getJokes() {
  try{
    const config= {headers :{Accept:"application/json"}};
    let joke= await axios.get(url3,config);
    console.log(joke.data);
  }catch(e){
    console.log("error is ::--->", e);
  }
}


// //Axios Updating query strings

let url4="http://universities.hipolabs.com/search?name=";

let btn2=document.querySelector("button");
btn.addEventListener("click", async ()=>{
  let country=document.querySelector("input").value;
  console.log(country);
  let colleges= await getColleges(country);
  show(colleges);
})
function show(colleges){
  let list =document.querySelector("#list");
  list.innerText= "";
  for(col of colleges){
    
    let li= document.createElement("li");
    li.innerHTML=col.name;
    list.appendChild(li);
  }
}
async function getColleges(country){
  try{
    let res= await axios.get(url4 + country);
    return res.data;
  }catch(e){
    console.log("Error is-->", e);
    return [];
  }
}