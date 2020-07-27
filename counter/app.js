
let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.target.classList;
    if (styles.contains('decrease')) {
      count--;

    } else if (styles.contains('increase')) {
      count++
    } else {
      count = 0;
    }
    count >= 0 ? value.style.color = 'green' : value.style.color = 'red';
    value.textContent = count;
  })
})