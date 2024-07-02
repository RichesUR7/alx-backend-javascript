/**
 * Checks if a Set has all values from an array.
 * @param {Set} set - The Set to check.
 * @param {Array} array - The array of values to check for.
 * @returns {boolean} `true` if the Set has all values from the array, `false` otherwise.
 */
function hasValuesFromArray(set, array) {
  return array.every((val) => set.has(val));
}

export default hasValuesFromArray;
