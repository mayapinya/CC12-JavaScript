const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', () => {
  if (button.innerHTML === 'Hide') {
    button.innerHTML = 'Show';
  } else {
    button.innerHTML = 'Hide';
  }
});