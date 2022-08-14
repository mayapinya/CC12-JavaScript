class Calculator {
    value = 0;
    constructor(value) {
        this.value = value;
    }

    sum(val) {
        this.value += val;
    }
    subtract(val) {
        this.value -= val;
    }
    multiply(val) {
        this.value *= val;
    }
    divide(val) {
        this.value /= val;
    }
    show() {
        alert(this.value);
    }
}

const cal = new Calculator(10);
// cal.show(); // 10
cal.sum(15);
// cal.show(); // 25
cal.subtract(5);
// cal.show(); // 20
cal.multiply(100);
// cal.show(); // 2000
cal.divide(2);
// cal.show(); // 1000