const inputEl = document.getElementById("text");
const btnEl = document.getElementById("btn");
const listEl = document.getElementById("List");

btnEl.addEventListener("click", () => {
    const inputValue = inputEl.value;
    if (!inputValue) return;
    console.log("click");
    var paragraph = document.createElement('p');
    paragraph.innerText = inputValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", deleteListItem);

    const tickBtn = document.createElement("button");
    tickBtn.innerText = "Tick";
    tickBtn.classList.add("tick-btn");
    tickBtn.addEventListener("click", markAsComplete);

    paragraph.appendChild(deleteBtn);
    paragraph.appendChild(tickBtn);
    listEl.appendChild(paragraph);
});

function deleteListItem(e) {
    const listItem = e.target.parentNode;
    listItem.remove();
}

function markAsComplete(e) {
    const listItem = e.target.parentNode;
    const tickEl = document.createElement("div");
    tickEl.innerHTML = "&#10003;";
    tickEl.classList.add("tick-mark");
    tickEl.style.display = "none";
    listItem.appendChild(tickEl);
    listItem.classList.toggle("completed");
    tickEl.style.display = listItem.classList.contains("completed") ? "block" : "none";
}



