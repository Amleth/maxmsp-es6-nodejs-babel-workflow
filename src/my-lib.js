/**
 * Get a random int in an interval
 * @param min
 * @param max
 * @returns {number}
 */
exports.rrand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};