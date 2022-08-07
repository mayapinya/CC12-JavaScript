let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

let initValue = {
  min: arr[0],
  max: arr[0]
};
let sortArr = arr.reduce((acc, item) => {
  if (acc.min > item) {
    acc.min = item;
  }
  if (acc.max < item) {
    acc.max = item;
  }
  return acc;
}, initValue);
console.log(sortArr);
