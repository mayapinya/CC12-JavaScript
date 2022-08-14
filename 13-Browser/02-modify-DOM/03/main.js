function clear(elem) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].remove();
    }
}
const elem = document.querySelectorAll('li');
clear(elem); // clears the list