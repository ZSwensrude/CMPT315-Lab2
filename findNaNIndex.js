
const findNaNIndex = (numArray) => {
  return numArray.findIndex( (num) => isNaN(num));
};

module.exports = findNaNIndex;

