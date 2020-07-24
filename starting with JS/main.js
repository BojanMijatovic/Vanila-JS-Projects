
const button = document.getElementById('btn');


function changeColorAndText() {
  const liItem = document.querySelector('.list-item');
  liItem.textContent = 'This is from btn click event';
  liItem.classList.toggle('remove-item');
  console.log('Btn');
}


button.addEventListener('click', changeColorAndText);


const textV = document.querySelector('#textValue');

function showValue(e) {
  console.log(e.target);
}


textV.addEventListener('input', showValue);


const form = document.getElementById('form');

const btn = document.getElementById('btn-form');

btn.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e.target.value);

})

