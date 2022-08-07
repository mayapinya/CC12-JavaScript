function checkPermission(role, callback1, callback2) {
  if (role === 'ADMIN') {
    callback1();
  } else {
    callback2();
  }
}

// CallBack When Admin
let adMinExecute = function () {
  alert('ACCESS GRANTED');
};

// CallBack When Guest
let guestExecute = () => alert('ACCESS DENIED');

checkPermission('ADMIN', adMinExecute, guestExecute); //ACCESS GRANTED

checkPermission('ADMININWZA', adMinExecute, guestExecute); //ACCESS DENIED
