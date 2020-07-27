const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  const text = document.querySelector('#text').value;
  e.preventDefault();
  console.log(text);
})


const books = ['react', 'js', 'redux'];

const setBooks = localStorage.setItem('books', JSON.stringify(books));
console.log(setBooks);

const getBooks = JSON.parse(localStorage.getItem('books'));
console.log(getBooks);