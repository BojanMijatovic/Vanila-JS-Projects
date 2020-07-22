
// const name = 'Alex Jordan';
// console.log(name.toUpperCase());

// const person = {
//   name: 'Peter',
//   greet() {
//     return `Hello ${this.name.toLowerCase()}`
//   }
// }
// console.log(person.greet());


// const index = name.toLowerCase().indexOf('j'); // combine methods
// console.log(index);


const names = ['Rex', 'Ted', 'Bob'];
const lastName = 'Reyes';

// const total = [...names, ...lastNames];
// console.log(total);

const fullName = [];

for (var i = 0; i < names.length; i++) {
  let total = ` ${names[i]} ${lastName}`
  fullName.push(total);
}

console.log(fullName);