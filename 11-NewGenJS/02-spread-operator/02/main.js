function calIndexThreeSquare(arr) {
  return arr.map((item, index) => (index === 3 ? item ** 2 : item));
}


const arr = [1, 2, 3, 5];
console.log(calIndexThreeSquare(arr)); // [1,2,3,25]