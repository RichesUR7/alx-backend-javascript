/**
 * Returns a list of student IDs.
 * @param {Object[]} list - An array of student objects.
 * @returns {number[]} An array of student IDs.
 */
function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.map((student) => student.id);
}

export default getListStudentIds;
