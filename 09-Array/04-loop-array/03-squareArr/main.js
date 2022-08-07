/*
INPUT : arr 
OUTPUT : newArr SQUARE !!
*/

const arr = [2, 3, 5, 7, 11];
function squareArr(array) {
  let newArr = new Array();
  for (const index in array) {
    newArr[index] = array[index] ** 2;
  }
  return newArr;
}
console.log(squareArr(arr)); // [4, 9, 25, 49, 121]
