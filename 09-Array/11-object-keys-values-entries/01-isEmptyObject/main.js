let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function sumByKeys(object) {
  const array = Object.keys(object);
  let sum = 0;
  array.forEach((item) => (sum += object[item]));
  return sum;
}
function sumByValues(object) {
  const array = Object.values(object);
  const sum = array.reduce((acc, item) => acc + item, 0);
  return sum;
}
function sumByEntries(object) {
  const array = Object.entries(object);
  const sum = array.reduce((acc, item) => {
    acc += item[1];
    return acc;
  }, 0);
  return sum;
}
sumByValues(salaries);
sumByEntries(salaries);
sumByKeys(salaries);
