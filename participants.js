/**
 * participants: Returns an array of all the player names (no player should be listed more than once)
 * @param {*} arr - of objects with a winner and loser field
 * @returns - an array of all players in the array, winner or loser
 */
const participants = (arr) => {
  // if arg is not array, return []
  if (!Array.isArray(arr)) return [];

  let participants = [];

  arr.forEach((element) => {
    // if winner not in participant list, add them
    if (!participants.includes(element.winner))
      participants.push(element.winner);

    // if loser not in participant list, add them
    if (!participants.includes(element.loser))
      participants.push(element.loser);
  })

  return participants;
}

module.exports = participants;

