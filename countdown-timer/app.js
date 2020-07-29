const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2020, 10, 13, 13, 59, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();
let day = futureDate.getDay();
let month = futureDate.getMonth();


giveaway.textContent = `giveaway ends on ${year} ${months[month]} ${date} ${weekdays[day]} ${hours}:${mins}`;

const futureTime = futureDate.getTime();

function getReamingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // 1s = 1000ms
  //1m = 60s
  //1h = 60m
  //1day = 24h

  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const min = 60 * 1000;


  let days = Math.floor(t / day);                        // round day
  let hours = Math.floor((t % day) / hour);       // round remain hours
  let minutes = Math.floor((t % hour) / min);
  let sec = Math.floor((t % min) / 1000);


  const values = [days, hours, minutes, sec];

  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  })

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry this giveaway is expired</h4>`
  }
}

let countdown = setInterval(getReamingTime, 1000);

getReamingTime();