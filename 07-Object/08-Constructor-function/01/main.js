function Calculator() {
  this.num1 = 0;
  this.num2 = 0;

  this.sum = function () {
    return this.num1 + this.num2;
  };
  this.read = function () {
    this.num1 = +prompt('Enter num1');
    this.num2 = +prompt('Enter num2');

    this.num1 = value1;
    this.num2 = value2;
  };
  this.mull = function () {
    return this.num1 * this.num2;
  };
}

const caluculator = new Calculator();
const caluculator2 = new Calculator();

caluculator.read();
console.log(caluculator.sum());
console.log(caluculator.mul());
console.log(caluculator);
