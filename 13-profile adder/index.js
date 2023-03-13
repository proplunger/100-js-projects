const btnEl = document.querySelector(".btn");
const name = document.querySelector(".name");
const age = document.querySelector(".age");
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const data = document.querySelector(".data");

btnEl.addEventListener("click", () => {
    console.log(name.value);
    data.innerHTML = name.value;
})