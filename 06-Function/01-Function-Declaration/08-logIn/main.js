function login(username, password) {
  if (username === 'admin' && password === 'P@ssw0rd') {
    return 'login สำเร็จ ';
  } else {
    return 'ไม่สำเร็จ';
  }
}

console.log(login('admin', 'P@ssw0rd'));
console.log(login('admin', '123456'));
