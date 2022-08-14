const mergeObjects = (...objs) => {
  let reObj = objs.reverse();
  let newObj = {};

  newObj = reObj.reduce((acc, item) => {
    Object.assign(acc, item);
    return acc;
  }, {});

  return newObj;
};

const obj1 = { num1: 1 };
const obj2 = {
  num2: 2,
  num3: 3,
  num1: 4,
};
const obj3 = {
  num5: 5,
  num6: 6,
  num7: 7,
};
const mergeObj = mergeObjects(obj1, obj2, obj3);
console.log("mergeObj", mergeObj);