let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // * [10, 30, 20] แสดงผลแบบนี้เพราะ ไม่มีการสลับตำแหน่งเข้าไปที่ตัวแปร