const sumMultiply = (...nums) => nums.reduce((acc, item) => acc * item, 1);
console.log(sumMultiply(3));
console.log(sumMultiply(4, 10));
console.log(sumMultiply(2, 5, 10));
