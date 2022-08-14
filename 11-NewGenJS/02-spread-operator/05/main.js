const removeRandom = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  arr.splice(randomIndex, 1);
  return arr;
};

const arrData = [1, 2, 3, 4, 5, 6];
console.log('removeRandom : ', removeRandom(arrData));