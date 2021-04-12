/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex (array, value) {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);
  let arrMiddleNumber = array[middle];
  while (left <= right) {
    middle = left + right;
    arrMiddleNumber = array[middle];
    if (arrMiddleNumber === value) {
      return middle;
    }
    if (arrMiddleNumber > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

module.exports = findIndex;
