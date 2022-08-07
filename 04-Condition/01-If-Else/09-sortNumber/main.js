let a = +prompt('Enter Number 1');
let b = +prompt('Enter Number 2');
let c = +prompt('Enter Number 3');

// a มากสุด
if (a > b && a > c) {
  if (b > c) {
    console.log(`${a}, ${b}, ${c}`);
  } else {
    console.log(`${a}, ${c}, ${b}`);
  }
  // b มากสุด
} else if (b > a && b > c) {
  if (a > c) {
    console.log(`${b}, ${a}, ${c}`);
  } else {
    console.log(`${b}, ${c}, ${a}`);
  }
  // c มากสุด
} else if (c > b && c > a) {
  if (a > b) {
    console.log(`${c}, ${a}, ${b}`);
  } else {
    console.log(`${c}, ${b}, ${a}`);
  }
  // ถ้าตัวเลขซ้ำกัน
} else {
  console.log(`${a}, ${b}, ${c}`);
}
