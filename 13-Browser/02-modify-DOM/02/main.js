while (true) {
  let text = prompt("enter text");
  if (text) {
    let li = document.createElement("li");
    li.innerHTML = text;
    document.getElementsByTagName("ul")[0].append(li);
  } else {
    break;
  }
}
