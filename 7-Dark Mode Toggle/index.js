const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();

inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
})

//inputEl.checked = true;

//updateBody();

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }else{
        bodyEl.style.background = "white";
    }
}

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

