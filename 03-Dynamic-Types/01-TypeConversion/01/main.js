let a = undefined;
let b = 2;
let c = a++;

// String(undefined) ==> "undefined" ==> NaN
// Number(undefined) ==> NaN

let d;
let e;
let f;

d = String(a); //NaN
e = '' + b;
f = `${c}`; //NaN

console.log('d:', d);
console.log(typeof d);

console.log('e:', e);
console.log(typeof e);

console.log('f:', f);
console.log(typeof f);
