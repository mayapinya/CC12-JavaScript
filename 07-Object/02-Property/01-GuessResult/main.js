let user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // * //{email: `cc@gmail.com`,isActive:false}
user = {};
console.log(user); // **  // Error เพราะ user เป็น const ไม่สามารถ assign ค่าใหม่ได้
