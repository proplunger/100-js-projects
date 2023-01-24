const btnEl = document.getElementById("btn");

const countEl = document.getElementById("count");

var ct = 0;

btnEl.addEventListener("click",function(){
    ct++;
    countEl.innerHTML = ct;
})
