

const h2 = document.querySelector('#dom');

h2.classList.add('subtitle', 'addNew');


const list = document.querySelector('.list');
console.log(list);
const newList = document.createElement('li');

newList.textContent = 'New Item from dom';
newList.classList.add('list');
list.append(newList);


const text = document.createElement('p');
text.textContent = 'Test is for practice';
text.classList.add('list-item');
list.append(text);

const newDiv = document.querySelector('.newItems');

newDiv.innerHTML = `<ul class="list"> 
<li>This is all from dom</li>
<li>This is all from inner HTML</li>
<li>This is all from dom</li>
</ul>`;


document.body.append(newDiv);