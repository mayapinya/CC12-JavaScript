// Arrow # 9

// Leap Year : หาร 4 ลงตัว
// Leap Year : ผลคูณของ 100 && หารด้วย 400 ลงตัวด้วย

let isLeapYear = (year) => {
  if (year % 100 === 0) {
    return year % 400 === 0;
  }

  return year % 4 === 0;
};

console.log(isLeapYear(200));
console.log(isLeapYear(1600));
console.log(isLeapYear(32));
