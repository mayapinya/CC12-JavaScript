//   INPUT = Object ,number
//   OUTPUT = Object (modifide only number by)
// CHECK each key with value

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

const multiplyNumeric = (obj, num) => {
  const result = {};
  for (let key in obj) {
    let currentValue = obj[key];
    if (typeof currentValue === 'number') {
      result[key] = currentValue * num;
    } else {
      result[key] = currentValue;
    }
  }
  return result;
};

console.log(multiplyNumeric(menu, 3));
console.log(menu);
