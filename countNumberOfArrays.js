/**
 * countNumberOfArrays: Return the count for the number of arrays inside a given array
 * @param {*} arr - array to count arrays inside of
 * @returns - number of arrays in given array
 */
const countNumberOfArrays = (arr) => {
  // if arg is not array, return -1
  if (!Array.isArray(arr)) return 0; 

  let count = 0;
  arr.forEach((element, index) => {
    if (Array.isArray(element)) {
      count++;
    }
  });

  return count;
}

module.exports = countNumberOfArrays;
