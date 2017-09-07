import { range, compose } from 'ramda';

// function* cartesianN(head, ...tail) {
//   // console.log(tail);
//   let remainder = tail.length ? cartesian(...tail) : [[]];
//
//   for (let r of remainder) for (let h of head) yield [h, ...r]
// }
//
// let cart = [];
// for (let c of cartesian(colls, rows)) {
//   cart.push(c)
//   // cart.push([...c])
//   console.log(c);
// }


function getPossibleCoords(obj) {
  const colls = range(1,obj.colls+1);
  const rows = range(1,obj.rows+1);

  function* cartesian(cls, rws) {
    for (let rw of rws) for (let cl of cls) yield [cl, rw];
  }

  let coords = [];
  for (let c of cartesian(colls, rows)) {
    coords.push(c)
  }

  return coords
}

const removeItemFromArr = (arr, index) => (
  [...arr.slice(0, index),
   ...arr.slice(index + 1)]
);

const randomCount = (min=4,max=12) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

const getRandomCoords = (pos) => {
  let count = randomCount()
  let oldPos = pos.slice();
  let randCoords = [];

  while (count > 0) {
    const index = Math.floor(Math.random() * oldPos.length);
    const item  = oldPos[index];
    randCoords.push(item);
    const newPos = removeItemFromArr(oldPos, index);
    oldPos = newPos;
    count--
  }

  return randCoords;
}

// const curriedGetRandomCoords = curry(getRandomCoords);

const sortCoords = (array) => {
  let arr = array.slice();
  arr.sort((a,b) => a[0] - b[0]);
  arr.sort((a,b) => a[1] - b[1]);

  return arr;
}

const getCollsRows = (wWidth) => {
  switch (true) {
    case  wWidth < 1100 && wWidth > 550:
      return {colls: 7, rows: 4};
    case wWidth < 550:
      return {colls: 4, rows: 5};
    default:
      return {colls: 9, rows: 4};
  }
};

const getGridCoords = compose(
  sortCoords,
  getRandomCoords,
  // curriedGetRandomCoords(randomCount(4,12)),
  getPossibleCoords,
  getCollsRows,
)

export default getGridCoords;
