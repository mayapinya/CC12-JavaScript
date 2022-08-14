const btnAdd = document.querySelector('.add');
const btnSubtract = document.querySelector('.subtract');
const btnReset = document.querySelector('.reset');
const count = document.querySelector('span');

btnAdd.addEventListener('click', function () {
  count.innerHTML = +count.innerHTML + 1;
});

btnSubtract.addEventListener('click', function () {
  if (count.innerHTML !== '0') {
    count.innerHTML = +count.innerHTML - 1;
  }
});

btnReset.addEventListener('click', function () {
  count.innerHTML = 0;
});