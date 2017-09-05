// let arr = [];
const removeItemFromArr = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1, arr.length)];

function getGridCoords(pos, range) {
  //generovat random cislo, pouzit ako index pre koordinaty
  // filtrovat s JSON.stingify()
  //
  let oldPos = pos.slice();
  let coords = [];
  while (range > 0) {
    const index    = Math.floor(Math.random() * oldPos.length);
    const item     = oldPos[index];
    coords.push(item);
    const newPos = removeItemFromArr(oldPos, index);
    oldPos = newPos;
    range--
  }


  coords.sort((a,b) => a[0] - b[0]);
  coords.sort((a,b) => a[1] - b[1]);

  return coords;
}

export default getGridCoords;
