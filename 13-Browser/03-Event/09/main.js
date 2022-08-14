const btnCheck = document.getElementsByTagName('button')[0];
const input = document.getElementsByTagName('input')[0];
const requiredText = document.querySelector('div');
requiredText.style.color = 'red';
btnCheck.addEventListener('click', () => {
  const value = input.value;
  if (value === '' || !(+input.value)) {
    input.style.border = '1px solid red';
    requiredText.innerHTML = 'Phone Number is required';
  } else if (value.length < 10) {
    input.style.border = '1px solid red';
    requiredText.innerHTML = 'Invalid length';
  } else {
    input.style.border = '';
    requiredText.innerHTML = '';
    alert('Your number is valid');
  }
});