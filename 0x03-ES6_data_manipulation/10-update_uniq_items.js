/**
 * Updates the quantity of unique items in a Map.
 * @param {Map} map - The Map to update.
 */
function updateUniqueItem(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}

export default updateUniqueItem;
