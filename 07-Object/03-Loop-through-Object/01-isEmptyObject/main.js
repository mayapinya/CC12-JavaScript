//INPUT : Object ที่ใช้ตรวจสอบ
//OUT : ture = Object ว่าง ไม่มี key , false = Object มีอย่างน้อย  1 key

function isEmptyObject(obj) {
  // เข้า for loop เมื่อ Object มี 1 key ขึ้นไป
  for (let key in obj) {
    return false;
  }
  // มีเฉพาะ 0 key ที่หลุดมาบรรทัดนี้ได้
  return true;
}

const user_1 = { name: 'cc12' };
const user_2 = { name: 'codecamp', cohort: 12 };
const user_3 = {};

console.log(isEmptyObject(user_1));
console.log(isEmptyObject(user_2));
console.log(isEmptyObject(user_3));
