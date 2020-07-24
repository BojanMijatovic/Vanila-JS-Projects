const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  const text = document.querySelector('#text').value;
  e.preventDefault();
  console.log(text);
})