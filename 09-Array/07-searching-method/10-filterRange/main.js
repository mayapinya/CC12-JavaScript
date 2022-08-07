const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterRange(array, lowerBound, upperBound) {
  return array.filter((item) => item >= lowerBound && item <= upperBound);
}

console.log(filterRange(arr, 5, 8));
