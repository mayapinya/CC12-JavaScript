const employees = {
  john: {
    salary: 1000,
    address: { district: 'Ratchathewi', province: 'Bangkok' }
  },
  peter: {
    salary: 1500,
    address: { district: 'Pathumwan', province: 'Bangkok' }
  },
  mike: {
    salary: 800,
    address: { district: 'Pakkret', province: 'Nonthaburi' }
  },
  sarah: {
    salary: 2200,
    address: { district: 'Sriraja', province: 'Chonburi' }
  }
};

let name = prompt('Search employee name :');
// สร้าง  Search มาเป็น function หาชื่อ จาก Object

const search = function (name, object) {
  let notFound = true;
  for (const key in object) {
    // ใช้ for in หา key
    if (key == name) {
      alert(
        `Name: ${name}, salary:${key.salary}, address:${key.address?.district}, ${key.address?.province}`
      ); // ทำการ alert key แต่ละส่วน
      notFound = false; // หาเจอแล้ว เป็น false
    }
  }
  if (notFound) alert('Not Found'); // ถ้าหาไม่เจอ  not found เป็น true ให้ alert
};

search(name, employees); // เรียกใช้งาน Function
