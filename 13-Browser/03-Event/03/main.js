const cancel = document.getElementById('cancel');
console.log(cancel);

//cancel request to server
cancel.removeEventListener('click', (event) => {
  event.preventDefault();
  alert('cancle request');
});