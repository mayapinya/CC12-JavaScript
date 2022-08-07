function fixedDecimal(num) {
  return (Math.floor(num * 100) / 100).toFixed(2);
}

console.log(fixedDecimal(10));
console.log(fixedDecimal(5.1));
console.log(fixedDecimal(3.1289));
