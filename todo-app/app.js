// ****** SELECT ITEMS **********
const alertText = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editId = '';

// ****** FUNCTIONS **********

//add item to list 
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    createListItem(id, value);

    displayAlert('item added to list', 'success');
    container.classList.add('show-container');

    // back to default
    setBackToDefault();

    // add to local storage
    addToLocalStorage(id, value);
  }
  else if (value && editFlag === true) {
    editElement.innerHTML = value;
    displayAlert('value change', 'success');

    //  edit local storage
    editLocalStorage(editId, value);
    setBackToDefault();
  }
  else {
    displayAlert('please enter value', 'danger');
  }
}

//delete single item function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const elementId = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  displayAlert('item removed', 'danger');
  setBackToDefault();

  // remove from local storage
  removeFromLocalStorage(elementId);
}

//edit single item function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;

  //  edit values
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = 'edit';
}

// display alert func
function displayAlert(text, action) {
  alertText.textContent = text;
  alertText.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(function () {
    alertText.textContent = '';
    alertText.classList.remove(`alert-${action}`);
  }, 1200)
}


//  set back to default
function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editId = '';
  submitBtn.textContent = 'submit';
}

//clear items function
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    })
  }
  container.classList.remove('show-container');
  displayAlert('empty list', 'danger');
  setBackToDefault();
  localStorage.removeItem('list');
}

// ****** EVENT LISTENERS **********
//load items
window.addEventListener('DOMContentLoaded', setupItems);

// submit form
form.addEventListener('submit', addItem);

// clear all items
clearBtn.addEventListener('click', clearItems);


// ****** LOCAL STORAGE **********

// add
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  const items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}

// remove
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  })
  localStorage.setItem('list', JSON.stringify(items));
}

//edit
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  })
  localStorage.setItem('list', JSON.stringify(items));
}

// setup local storage
function getLocalStorage() {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}


// ****** SETUP ITEMS **********

function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value)
    })
    container.classList.add('show-container');
  }
}


function createListItem(id, value) {
  const element = document.createElement('article');
  element.classList.add('grocery-item');

  // add id to element
  const attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = ` <p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;

  // use delete btn in single item 
  const deleteBtn = element.querySelector('.delete-btn');
  const editBtn = element.querySelector('.edit-btn');
  deleteBtn.addEventListener('click', deleteItem);
  editBtn.addEventListener('click', editItem);

  // add item to list 
  list.append(element);
}