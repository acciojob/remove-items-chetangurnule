//your JS code here. If required.
let button = document.querySelector("#btn");
button.addEventListener("click", ()=>{
    let selectList = document.querySelector("#colorSelect");
    let options = document.querySelectorAll("option");
    options.forEach((option)=>{
        if(selectList.value == option.textContent){
            option.remove();
        }
    })
});