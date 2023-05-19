//your JS code here. If required.
let button = document.querySelector("#btn");
let div = document.querySelector("#colorSelect");
button.addEventListener("click", removeElement)

function removeElement(){
    div.remove(div.selectedIndex);
 };
