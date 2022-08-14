const a = document.querySelector('a');
a.addEventListener('click', function (event) {
  event.preventDefault();
  const redirect = confirm('Leave for https://google.com?');
  if (redirect) {
    location.href = 'https://google.com';
  }
});