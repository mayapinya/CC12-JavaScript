const MakeObjectFruits = function (obj) {
  let name = prompt(`fruit you name:`); // รับชื่อลงตัวแปร name
  let unit = +prompt(`How many:`); // รับจำนวนลง unit
  if (unit > 1) {
    obj[`${name + `s`}`] = unit;
  } else {
    obj.name = unit;
  }
};
const fruitsList = {};
MakeObjectFruits(fruitsList);
console.log(fruitsList);
