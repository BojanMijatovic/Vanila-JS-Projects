
const button = document.getElementById('btn');




button.addEventListener('click', function () {
  const liItem = document.querySelector('.list-item');
  liItem.textContent = 'This is from btn click event';
  liItem.classList.toggle('remove-item');
  console.log('Btn');
})