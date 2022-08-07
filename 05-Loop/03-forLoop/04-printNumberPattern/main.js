let str = '';
for (let i = 1; i < 9; i++) {
  for (let j = 1; j <= i; j++) {
    str += `${j} `;
  }
  if (str) {
    str = str + '\n';
  }
}
console.log(str);
