const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

function changeColor() {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  colorSpan.textContent = colors[randomNumber];
}

btn.addEventListener('click', changeColor);