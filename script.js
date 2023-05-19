//your JS code here. If required.
let button = document.querySelector("#btn");
let option = document.querySelectorAll("option");
button.addEventListener("click", ()=>{
    let selectList = document.querySelector("#colorSelect");
    option.forEach((element)=>{
        if(selectList.value == element.textContent){
            element.remove();
        }
    })
});