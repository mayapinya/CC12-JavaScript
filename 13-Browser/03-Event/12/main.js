const btnAdd = document.querySelector(".btn-add");
const ul = document.querySelector("ul");

function creteItem(teskName, toggle) {
  if (teskName) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    // Update value 
    span.innerHTML = teskName;

    //check toggle
    span.style.textDecoration = toggle ? "line-through" : '';
    span.style.color = toggle ? "green" : '';

    const btnEdit = document.createElement("button");
    btnEdit.className = "btn-edit";
    btnEdit.innerHTML = "Edit";

    const btnDel = document.createElement("button");
    btnDel.className = "btn-del";
    btnDel.innerHTML = "Del";

    // Click toggle span
    span.addEventListener("click", function (e) {
      const el = e.target;
      if (el.style.textDecoration === "line-through") {
        el.style.textDecoration = "";
        el.style.color = "";
      } else {
        el.style.textDecoration = "line-through";
        el.style.color = "green";
      }
    });

    // Click toggle edit
    btnEdit.addEventListener("click", function () {
      const newValue = prompt("Enter new text");
      const span = this.previousElementSibling;
      span.innerHTML = newValue;
    });

    // Click toggle del
    btnDel.addEventListener("click", function () {
      console.log("Del");
      const li = this.parentElement;
      li.remove();
    });

    // Add li item
    li.append(span);
    li.append(btnEdit);
    li.append(btnDel);
    return li;
  }
  return;
}

btnAdd.addEventListener("click", function () {
  const input = document.querySelector("input");
  const newValue = input.value;
  ul.append(creteItem(newValue, false));
  input.value = "";
});



ul.append(creteItem("Tesk1", true));
ul.append(creteItem("Tesk2", false));
