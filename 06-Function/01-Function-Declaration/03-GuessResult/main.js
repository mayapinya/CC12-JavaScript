let message = 'Welcome to Thailand';

function logMessage(message) {
  message = 'Hello everybody';
  console.log(message); // * // Hello everybody เรารับค่า message เป็น Hello everybody
}

logMessage(message);
console.log(message); // ** // Welcome to Thailand เพราะ message อยู่ข้างนอกเป็น  Welcome to Thailand

let name = 'John';

function sayHi(input) {
  console.log(name); // *** // John เพราะ name ข้างนอกเป็น John
  name = input;
}

sayHi();
console.log(name); // **** //undefined เพราะ name = input แล้ว input มีค่าเป็น undefined จึงทำให้ name เป็น undefined
