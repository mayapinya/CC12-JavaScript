function max() {
  let maxValue = arguments[0];
  if (maxValue) {
    for (let i = 0; i < arguments.length; i++) {
      if (maxValue < arguments[i]) {
        maxValue = arguments[i];
      }
    }
    return maxValue;
  }
  return;
}

max(); // undefined
max(2); // 2
max(3, 1); // 3
max(7, 3, 9, 2); // 9
