/**
 * countNumberOfArrays: Return the count for the number of arrays inside a given array
 * @param {*} arr - array to count arrays inside of
 * @returns - number of arrays in given array
 */
const countNumberOfArrays = (arr) => {
  // if arg is not array, return 0
  if (!Array.isArray(arr)) return 0; 

  let count = 0;
  // check each element
  arr.forEach((element) => {
    // if element is array, increment it
    if (Array.isArray(element)) {
      count++;
    }
  });

  return count;
}

module.exports = countNumberOfArrays;
