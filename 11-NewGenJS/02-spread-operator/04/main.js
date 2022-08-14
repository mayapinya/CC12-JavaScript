function doubleAndReturnArgs(arr, ...numbers) {
  let numbersMultiply = numbers.map(function (item) {
    return item * 2;
  });
  return [...arr, ...numbersMultiply];
}

console.log("expexted result : ", doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log("expexted result : ", doubleAndReturnArgs([2], 10, 4));
