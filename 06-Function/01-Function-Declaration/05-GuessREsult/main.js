const sender = 'Matt';

function sendTo(from, to) {
  console.log(`From ${from} to ${to}`);
}

sendTo(sender, 'Sarah'); // * 'From Matt to Sarah' เพราะ from มีค่าเป็น Matt และ to มีค่าเป็น Sarah ค่าที่ส่งมาใน function
sendTo(null); // ** 'From null to undefined' เพราะ from ส่งค่า null เข้าไป และ to ไม่ได้กำหนดค่าให้กับ function
