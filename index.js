let countEl = document.getElementById("count-el");
let displayEl = document.getElementById("Display");

let saveEl = document.getElementById("save-el");

 let count = 0;

 function incrementCount(){
    count = count + 1;
    countEl.textContent = count;
}


function decrementCount(){


    
    if(count < 1 )
    {
        displayEl.textContent = "increment the Count";

}
else
{
    
    count = count - 1;
    countEl.textContent = count;


}
}



function saveCount(){
    let countStr = count + " ";
    saveEl.textContent += countStr;
    
}



console.log("hello");

