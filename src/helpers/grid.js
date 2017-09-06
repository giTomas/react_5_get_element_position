import { range, compose } from 'ramda';
// import getGridCoords from './random'

//utils

function getPossibleCoords(obj) {
  const cols = range(1,obj.cols+1);
  const rows = range(1,obj.rows+1);

  function* cartesian(head, ...tail) {
    let remainder = tail.length ? cartesian(...tail) : [[]];

    for (let r of remainder) for (let h of head) yield [h, ...r]
  }

  let cart = [];
  for (let c of cartesian(cols, rows)) {
    cart.push([...c])
  }

  return cart
}

const removeItemFromArr = (arr, index) => (
  [...arr.slice(0, index), ...arr.slice(index + 1, arr.length)]
);

const getRandomCoords = (pos, count=12) => {
  let oldPos = pos.slice();
  let randCoords = [];

  while (count > 0) {
    const index    = Math.floor(Math.random() * oldPos.length);
    const item     = oldPos[index];
    randCoords.push(item);
    const newPos = removeItemFromArr(oldPos, index);
    oldPos = newPos;
    count--
  }

  return randCoords;
}

const sortCoords = (array) => {
  let arr = array.slice();
  arr.sort((a,b) => a[0] - b[0]);
  arr.sort((a,b) => a[1] - b[1]);

  return arr;
}

const getColsRows = (wWidth) => {
  let grid = {};
  switch (true) {
    case  wWidth < 1100 && wWidth > 550:
      grid.cols = 7;
      grid.rows = 4;
      return grid;
    case wWidth < 550:
      grid.cols = 4
      grid.rows = 7
      return grid;
    default:
      grid.cols = 9;
      grid.rows = 4;
      return grid;
  }
}

const getGridCoords = compose(
  sortCoords,
  getRandomCoords,
  getPossibleCoords,
  getColsRows,
)


export default getGridCoords;
