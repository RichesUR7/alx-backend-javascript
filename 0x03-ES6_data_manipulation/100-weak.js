export const weakMap = new WeakMap();

/**
 * Tracks the number of times an API endpoint is queried.
 * @param {Object} endpoint - The API endpoint.
 * This is an object with `protocol` and `name` properties.
 */
export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
