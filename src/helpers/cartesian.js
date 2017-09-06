import { range, compose } from 'ramda';
import getGridCoords from './random'

function getPossibleCoordinates(arr, ...n) {
  function* cartesian(head, ...tail) {
    let remainder = tail.length ? cartesian(...tail) : [[]];

    for (let r of remainder) for (let h of head) yield [h, ...r]
  }

  let cart = [];
  for (let c of cartesian(arr, ...n)) {
    cart.push([...c])
  }

  return cart
}
//
// const cols = range(1,7+1);
// const rows = range(1,4+1);

const gridCellsCoords = (obj) => {
  console.log(obj);
  const cols = range(1,obj.cols+1);
  const rows = range(1,obj.rows+1);
  return getPossibleCoordinates(cols, rows);
}


function getRange(width){
  let grid = {};
  switch (true) {
    case  width < 1000 && width > 451:
      grid.cols = 6;
      grid.rows = 5;
      return grid;
    case width < 450:
      grid.cols = 4
      grid.rows = 7
      return grid;
    default:
      grid.cols = 7;
      grid.rows = 4;
      return grid;
  }
}


export const gridCoordinates = compose(
  getGridCoords,
  gridCellsCoords,
  getRange,
)


export default gridCoordinates;
