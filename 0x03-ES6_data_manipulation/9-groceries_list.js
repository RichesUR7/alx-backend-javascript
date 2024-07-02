/**
 * Returns a Map of groceries with their quantities.
 * @returns {Map} A Map of groceries. Each key is a grocery
 * item and each value is the quantity of that item.
 */
function groceriesList() {
  const groceries = new Map();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  return groceries;
}

export default groceriesList;
