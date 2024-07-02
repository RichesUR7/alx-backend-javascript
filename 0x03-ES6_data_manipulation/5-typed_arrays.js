/**
 * Creates an Int8Array with a value at a specific position.
 * @param {number} length - The length of the array.
 * @param {number} position - The position to set the value at.
 * @param {number} value - The value to set.
 * @returns {DataView} A DataView representing the array.
 */
function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setUint8(position, value);
  return view;
}

export default createInt8TypedArray;
