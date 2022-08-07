let number = +prompt('Enter Number'); //4596
let sum = 0;

while (number) {
  let remainder = number % 10;
  number = (number - remainder) / 10;
  console.log('remainder', remainder);
  sum = sum + remainder;
}
alert(`sum = ${sum}`); // 24
