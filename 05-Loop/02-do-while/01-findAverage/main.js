function isNum(input) {
  return !(input === null || input.trim() === '' || input == 0 || isNaN(input));
}

let input;
let sum = 0;
let count = 0;

do {
  input = prompt('Enter Number');
  if (isNum(input)) {
    sum = sum + Number(input);
    count++;
  }
} while (isNum(input));

if (count > 0) {
  console.log(`ผลรวม : ${sum}`);
  console.log(`ค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอก : ${sum / count}`);
}
