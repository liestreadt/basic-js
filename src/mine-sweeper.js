const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function createNeighbourss ([i, j]) {
    return [
      [i - 1, j - 1],
      [i - 1, j],
      [i - 1, j + 1],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j - 1],
      [i + 1, j],
      [i + 1, j + 1],
    ]
  };
  let mineMatrix = matrix.map((item) => item.map((i) => 0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        let neighbours = createNeighbourss([i, j]);
        console.log(neighbours);
        for (let k = 0; k < 8; k++) {
          if (
            neighbours[k][0] >= 0 && neighbours[k][1] >= 0 &&
            neighbours[k][0] < matrix.length && neighbours[k][1] < matrix[i].length
          ) {
            mineMatrix[neighbours[k][0]][neighbours[k][1]]++;
          }
        }
      }
    }
  }
  return mineMatrix;
}

module.exports = {
  minesweeper
};
