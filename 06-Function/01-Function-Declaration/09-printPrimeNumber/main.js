//เช็คตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่
function checkPrime(num) {
  let isPrime = true;

  // loop ตัวหาร หา จำนวนเฉพาะ
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

//ฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข และแสดงตัวเลขจำนวนเฉพาะทั้งหมดตั้งแต่ 2 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์
function createPrime(limit) {
  for (let i = 2; i <= limit; i++) {
    let isPrime = checkPrime(i);

    if (isPrime) {
      console.log(i);
    }
  }
}

createPrime(500);
