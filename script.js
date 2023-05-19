//your JS code here. If required.
let button = document.querySelector("#btn");
button.addEventListener("click", ()=>{
    let selectList = document.querySelector("#colorSelect");
    let option = document.querySelectorAll("option");
    option.forEach((element)=>{
        if(selectList.value == element.textContent){
            option.remove();
        }
    })
});