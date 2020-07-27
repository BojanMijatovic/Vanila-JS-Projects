
const btnToggle = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');
const btnClose = document.querySelector('.close-btn');

btnToggle.addEventListener('click', function () {
  sideBar.classList.toggle('show-sidebar');
})

btnClose.addEventListener('click', function () {
  sideBar.classList.remove('show-sidebar');
})