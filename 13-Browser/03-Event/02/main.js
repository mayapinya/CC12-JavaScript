const button = document.getElementById('button1');

// DOM property
button.onclick = () => {
  alert('Form is submitted');
};

//Add EventListener
button1.addEventListener('click', () => alert('Form is submitted'));
button1.removeEventListener('click', () => { });