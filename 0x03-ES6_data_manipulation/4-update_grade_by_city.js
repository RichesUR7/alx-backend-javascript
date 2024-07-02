/**
 * Updates the grade for students in a specific city.
 * @param {Object[]} studentList - An array of student objects.
 * @param {string} city - The city to filter by.
 * @param {Object[]} newGrades - An array of grade objects.
 * Each object has `studentId` and `grade` properties.
 * @returns {Object[]} An array of updated student objects.
 */
function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
