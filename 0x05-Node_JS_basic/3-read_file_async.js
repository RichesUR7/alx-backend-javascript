const fs = require('fs').promises;

/**
 * @module countStudents
 *
 * This module exports a function that counts the number of students in each field from a CSV file.
 *
 * @param {string} dataFilePath - The path to the CSV data file.
 *
 * @throws {Error} If the database file does not exist or is not a file.
 * @throws {Error} If the database file has fewer than two lines (a header and at least one row).
 *
 * @returns {Promise<void>}
 */
const countStudents = async (dataFilePath) => {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf8');
    const fileLines = fileContent.trim().split('\n');

    if (fileLines.length < 2) {
      throw new Error('Cannot load the database');
    }

    const [header, ...rows] = fileLines;
    const dbFieldNames = header.split(',');
    const studentPropsNames = dbFieldNames.slice(0, -1);

    const studentGroups = new Map();

    rows.forEach((line) => {
      const studentRecord = line.trim().split(',');

      if (studentRecord.length < dbFieldNames.length) return;

      // Create an object representing the student
      const studentObject = Object.fromEntries(
        studentPropsNames.map((propName, idx) => [
          propName,
          studentRecord[idx],
        ]),
      );

      const field = studentRecord[studentRecord.length - 1];

      if (!studentGroups.has(field)) {
        studentGroups.set(field, []);
      }

      // Add the student object to the appropriate array in the fields map
      studentGroups.get(field).push(studentObject);
    });

    // The total number of students
    const totalStudents = Array.from(studentGroups.values()).reduce(
      (sum, students) => sum + students.length,
      0,
    );

    console.log(`Number of students: ${totalStudents}`);

    studentGroups.forEach((students, field) => {
      const studentNames = students
        .map((student) => student.firstname)
        .join(', ');
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${studentNames}`,
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
