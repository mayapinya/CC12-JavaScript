let a = undefined;
let b = null;
let c = b + '4 2'; // "null4 2"

let d = +a; // NaN
let e = Number(b); // 0
let f = c * 1; // NaN

console.log('d:', d);
console.log(typeof d);

console.log('e:', e);
console.log(typeof e);

console.log('f:', f);
console.log(typeof f);
