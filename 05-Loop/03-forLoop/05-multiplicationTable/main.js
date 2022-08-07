let str = '';
for (let muti = 2; muti <= 12; muti++) {
  for (let i = 1; i <= 12; i++) {
    str += `${muti} x ${i} = ${muti * i} \n`;
  }
  str += `\n`;
}
console.log(str);
