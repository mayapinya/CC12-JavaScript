let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];
let newArr = flattened.reduce((acc, item, index, array) => {
  acc.push(...item);
  return acc;
}, []);
console.log(newArr);
