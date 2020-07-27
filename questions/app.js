//using selectors inside the element
// traversing the dom


const questionBtns = document.querySelectorAll('.question-btn');

questionBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  })
})