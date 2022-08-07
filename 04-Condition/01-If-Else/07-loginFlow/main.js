let username = prompt('Enter username');
let password = prompt('Enter password');

if (
  (username === 'admin' && password === '1234') ||
  (username === 'john' && password === 'qwerty')
) {
  alert(`Hello ${username}`);
} else if (username === '') {
  alert('username is required');
  if (password === '') {
    alert('password is required');
  }
} else if (password === '') {
  alert('password is required');
} else {
  alert('invalid username or password');
}
