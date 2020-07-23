// const list = ['books', 'cars', 'fruits', 'drinks', 'beer'];

// const people = [
//   { name: 'Alex', job: 'developer', age: 32 },
//   { name: 'Tim', job: 'solider', age: 25 },
//   { name: 'Rex', job: 'manager', age: 40 }
// ]

// const peopleAge = people.map(function (person) {
//   return person.age;                                        // map function return new arr
// })
// console.log(peopleAge);


// const showNames = people.map(function (person) {
//   let test = document.createElement('p');
//   test.innerText = `Name: ${person.name}`;
//   document.body.append(test);
// })


// const olderPeople = people.filter(function (person) {
//   return person.age > 30;                                        // filter return new array
// })
// console.log(olderPeople);


// const findPeople = people.find(function (person) {  // find return obj
//   return person.name === 'Rex';
// })
// console.log(findPeople);


// const allAge = people.reduce(function (acc, curr) {
//   return acc += curr.age;
// }, 0)
// console.log(allAge);

// const date = new Date();
// console.log(date.toDateString());

// document.body.append(date.toDateString())

const btn = document.getElementById('btn');

const subHeadings = document.getElementsByTagName('h2');
console.log(subHeadings);

const list = document.querySelectorAll('.list');

list.forEach(function (item) {
  item.style.color = 'red';
})