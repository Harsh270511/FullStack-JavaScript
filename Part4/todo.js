let todo=[];

let req= prompt("Enter your request");

while(true){
  if(req=="quit"){
    console.log("Quitting todo app");
    break;
  }

  if(req=="list"){
    console.log("----------------");
    for(let i=0; i<todo.length;i++){
      console.log(i, todo[i]);
    }console.log("----------------");
  }else if(req=="add"){
    let task = prompt("Enter your task which you wants to add");
    todo.push(task);
    console.log("task added");
  }
  else if(req=="delete"){
    let idx=prompt("Enter the task index you wants to delete");
    todo.splice(idx,1);
    console.log("your task is deleted successfully");
  }else{
    console.log("wrong request entered");
  }
  req=prompt("Enter your request");
}