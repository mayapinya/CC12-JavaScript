let array = [];
let input = 0;
let sum = 0;
do {
  input = prompt('Enter number');
  if (isFinite(input) && input != null && input.trim() != '') {
    array.push(+input);
    loop = true;
    sum += +input;
  }
  console.log(input);
} while (isFinite(input) && input != null && input.trim() != '');

console.log(sum);
