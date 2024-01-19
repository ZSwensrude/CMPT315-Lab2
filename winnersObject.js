const participants = require('./participants.js')

/**
 * winnersObject(): Returns an object which lists each participant, and a list of who they've beaten
 * @param {*} arr - list of match objects
 * @returns - object with keys for each player, and a list of the participants they have beaten
 */
const winnersObject = (arr) => {
  // if arg is not array, return {}
  if (!Array.isArray(arr)) return {};

  let winners = {};

  // create field for each participant
  participants(arr).forEach((element) => {
    winners[element] = [];
  })

  // add the losers to the winner's field
  arr.forEach((element) => {
    winners[element.winner].push(element.loser);
  })

  return winners;
}

module.exports = winnersObject;
