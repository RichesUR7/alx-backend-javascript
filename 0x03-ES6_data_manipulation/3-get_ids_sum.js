/**
 * Returns the sum of all student IDs.
 * @param {Object[]} list - An array of student objects.
 * @returns {number} The sum of all student IDs.
 */
function getStudentIdsSum(list) {
  return list.reduce((total, student) => total + student.id, 0);
}

export default getStudentIdsSum;
