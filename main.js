// MODEL
const TOODOS=[];

// DOM NODES
let btn=document.querySelector("button");
let input=document.querySelector("input");
let root=document.getElementById("root");


function addTodo(){
    // UPDATE MODEL
    TOODOS.push(input.value)
    input.value="";
    input.focus();
    


    // UPDATE UI
    render();
    
}


function removeTodo(item){
    let index=TOODOS.indexOf(item);
    TOODOS.splice(index,1);
    render();
    
}



function render(){
   let template= TOODOS.map(todo=>{
        return `<li>
                ${todo}
                <button onclick='removeTodo("${todo}")'> <i class="fa-solid fa-trash "></i></button>
                </li>`
    }).join("");
    root.innerHTML=template;
}


// EVENTS
btn.addEventListener("click",addTodo)