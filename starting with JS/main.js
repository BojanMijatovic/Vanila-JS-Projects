const gas = [10, 22, 45];
const food = [66, 1, 31];

function calcTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

let g = calcTotal(gas);
let f = calcTotal(food);

let totalExpenses = g + f;
console.log(`Total expenses are ${totalExpenses} $`);