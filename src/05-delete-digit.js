/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const newArr = [];
  arr.forEach((it, i) => { newArr.push(Number(String(n).slice(0, i) + String(n).slice(i + 1))); });
  return Math.max(...newArr);
}

module.exports = deleteDigit;
