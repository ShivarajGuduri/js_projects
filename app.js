const form = document.querySelector("#list");
const input = document.querySelector("#listName");
const list = document.querySelector("#listItem");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const liItem = input.value
    const newLi = document.createElement("LI");
    newLi.innerText = liItem;
    list.append(newLi);
    input.value = "";
})

list.addEventListener("click", function(e){
    e.target.remove();
})