const x = document.querySelector(".d1")
document.querySelector(".equal").addEventListener('click', () => {
    const ans = eval(x.value);
    x.value = ans;
})