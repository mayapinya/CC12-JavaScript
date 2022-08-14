const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

let numArray = [5, ...nums1, -6, -1, ...nums2];
console.log(numArray);

let sum = numArray.reduce((a, c) => a + c, 0);

console.log("sum : ", sum);
