let number = +prompt('Enter Number'); //123
let count = 0;

while (number) {
  let remainder = number % 10; // 3
  number = (number - remainder) / 10; // 12
  count++;
}
alert(count);
