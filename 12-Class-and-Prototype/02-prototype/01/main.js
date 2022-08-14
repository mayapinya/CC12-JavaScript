let arr = [1, 2, 3, 11, 27, 7, 10];

arr.__proto__.max = function () {
  return this.reduce((sum, current) => (sum < current) ? current : sum, 0);
};
arr.__proto__.sum = function () {
  return this.reduce((sum, current) => sum + current, 0);
};

const sum = arr.sum();
console.log("sum", sum);

const max = arr.max();
console.log("max", max);
