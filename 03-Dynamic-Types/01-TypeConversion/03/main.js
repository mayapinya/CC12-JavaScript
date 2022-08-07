let a = undefined;
let b = ' '; // true value
let c = !b; // false

let d = Boolean(a); // false
let e = !!b; // true
let f = Boolean(c); // false

console.log('d:', d); // false
console.log(typeof d);

console.log('e:', e); // true
console.log(typeof e);

console.log('f:', f); // false
console.log(typeof f);
