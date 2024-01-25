/**
 * findNaNIndex: Find all the indexes where NaN is found in a given array of numbers and NaN
 * @param {*} numArray - the array with any amounts of numbers and NaN values 
 * @returns an array with the indexes of found NaN values (if any)
 */
const findNaNIndex = (numArray) => {
  // if arg is not array, return -1
  if (!Array.isArray(numArray)) return []; 

  // copy array so we aren't messing with the original
  let numArrayCopy = [... numArray];
  let arr = [];
  let found = 0;
  while (found !== -1) {
    // find NaN values
    found = numArrayCopy.findIndex( (num) => isNaN(num));
    // if found add index to final array
    if (found !== -1)
      arr.push(found)
    // replace NaN with 0 so we dont find it again
    numArrayCopy[found] = 0;
  }
  return arr;
};

module.exports = findNaNIndex;

