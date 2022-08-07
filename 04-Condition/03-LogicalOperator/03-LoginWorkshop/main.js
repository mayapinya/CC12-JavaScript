let user = prompt('Please fill user');
if (user === 'codecamp') {
  let password = prompt('Please fill password');
  if (password === '123456') {
    alert(`Welcome ${user}`);
  } else {
    alert('Wrong password');
  }
} else {
  user = 'guest';
  alert(`Welcome ${user}`);
}
