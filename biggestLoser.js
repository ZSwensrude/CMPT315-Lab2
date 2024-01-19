const participants = require('./participants.js')

/**
 * biggestLoser: Returns the player with the most losses, subtracting wins from their loss count.
 * @param {*} arr - list of match objects
 * @returns - name of biggest loser
 */
const biggestLoser = (arr) => {
  // if arg is not array, return ''
  if (!Array.isArray(arr)) return '';

  let pointTally = {};

  // create field for each participant, with a score value
  participants(arr).forEach((element) => {
    pointTally[element] = 0;
  })

  arr.forEach((element) => {
    // increment winner score
    pointTally[element.winner] += element.loser_points;
    // decrement loser score
    pointTally[element.loser] -= element.loser_points;
  })

  console.log("pointTally", pointTally)

  // theres almost certaintly a better way to do this but this works
  let smallest = Infinity;
  let player = '';
  for (const [key, value] of Object.entries(pointTally)) {
    // check if the points is less than the previous least
    if (value < smallest) {
      // if so, save new least, and player name
      player = key;
      smallest = value;
    }
  }

  return player;
}


module.exports = biggestLoser;

