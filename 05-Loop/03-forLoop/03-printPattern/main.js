let str = '';
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j < i; j++) {
    str += '* ';
  }
  if (str) {
    str = str + '\n';
  }
}
console.log(str);
