/**
 * Returns a list of students in a specific city.
 * @param {Object[]} list - An array of student objects.
 * @param {string} city - The city to filter by.
 * @returns {Object[]} An array of student objects in the specified city.
 */
function getStudentsByLocation(list, city) {
  return list.filter((student) => student.location === city);
}

export default getStudentsByLocation;
