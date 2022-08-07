function random(min, max) {
  let diff = Math.random() * (max - min); // 7
  return min + diff;
}

console.log(random(2, 9));
