/**
 * Returns a list of students.
 * @returns {Object[]} An array of student objects.
 * Each object has `id`, `firstName`, and `location` properties.
 */
function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}

export default getListStudents;
