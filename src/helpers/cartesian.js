import { range } from 'ramda';

function *cartesian(head, ...tail) {
  let remainder = tail.length ? cartesian(...tail) : [[]];

  for (let r of remainder) for (let h of head) yield [h, ...r]
}

function getCombinations(fn, arr, ...n) {
  let cart = [];
  for (let c of fn(arr, ...n)) {
    cart.push([...c])
  }

  return cart
}

const cols = range(1,6+1);
const rows = range(1,5+1);

const combinations = getCombinations(cartesian, cols, rows);


export default combinations;
