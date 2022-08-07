let sumAll = 0;
let sumOdd = 0;
let sumEvent = 0;

let sumEventPow = 0;
let sumOddPow = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    //หาร 2 ลงตัว
    sumEventPow = sumEventPow + (i ^ 2);
    sumEvent = sumEvent + i;
  }
  if (i % 3 === 0) {
    //หาร 3 ลงตัว
    sumOddPow = sumOddPow + (i ^ 2);
  } else {
    sumOdd = sumOdd + i;
  }
  sumAll = sumAll + i;
}

console.log(`ผลรวมตัวเลขทุกตัว: ${sumAll}`);
console.log(`หาผลรวมเฉพาะเลขคู่ : ${sumEvent}`);
console.log(`ผลรวมเฉพาะเลขคี่ : ${sumOdd}`);
console.log(`หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง ${sumEventPow}`);
console.log(`ผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 ${sumOddPow}`);
console.log(
  `หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง - ผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 : ${
    sumEventPow - sumOddPow
  }`
);
