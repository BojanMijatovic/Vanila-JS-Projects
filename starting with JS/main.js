const list = ['books', 'cars', 'fruits', 'drinks', 'beer'];

const people = [
  { name: 'Alex', job: 'developer', age: 32 },
  { name: 'Tim', job: 'solider', age: 25 },
  { name: 'Rex', job: 'manager', age: 40 }
]

const peopleAge = people.map(function (person) {
  return person.age;
})

console.log(peopleAge);


const showNames = people.map(function (person) {
  let test = document.createElement('p');
  test.innerText = `Name: ${person.name}`;
  document.body.append(test);
})