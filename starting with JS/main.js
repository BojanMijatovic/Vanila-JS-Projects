

const h2 = document.querySelector('#dom');

h2.classList.add('subtitle', 'addNew');


const list = document.querySelector('.list');
console.log(list);
const newList = document.createElement('li');

newList.textContent = 'New Item from dom';
newList.classList.add('list');
list.append(newList);