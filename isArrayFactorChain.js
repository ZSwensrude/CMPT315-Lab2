/**
 * isArrayFactorChain: Return true or false if an array is a factor chain or not
 * @param {*} numArray - array of numbers that will be checked
 * @returns true or false if the array is a factor chain or not
 */
const isArrayFactorChain = (numArray) => {
  // if arg is not array, return -1
  if (!Array.isArray(numArray)) return false; 
  // if array is one or no numbers, it cannot be a chain
  else if(numArray.length < 2) return false;

  let prevNum = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    // check if previous number is a factor of the current num
    if (numArray[i] % prevNum !== 0) {
      // if not, return false
      return false;
    }
    // if so, update prevNum for next loop
    prevNum = numArray[i];
  }
  return true;
}

module.exports = isArrayFactorChain;
