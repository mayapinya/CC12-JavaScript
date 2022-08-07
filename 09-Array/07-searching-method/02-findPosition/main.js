const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
let result = [];
for (let index in alphabets) {
  if (alphabets[index] === 'a') {
    result.push(index);
  }
}
console.log(result);
