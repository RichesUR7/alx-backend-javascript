import { promises as fs } from 'fs';

/**
 * Reads a CSV database file asynchronously and returns an object with arrays of first names
 * of students grouped by their fields.
 *
 * @param {string} filePath - The path to the CSV database file.
 * @returns {Promise<object>} A promise that resolves to an object where the keys are field names
 *                            and the values are arrays of first names of students in those fields.
 *                            If the file is not accessible, the promise is rejected with an error.
 */
export async function readDatabase(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const fileLines = fileContent.trim().split('\n');

    if (fileLines.length < 2) {
      throw new Error('Cannot load the database');
    }

    const [header, ...rows] = fileLines;
    const dbFieldNames = header.split(',');
    const firstNameIdx = dbFieldNames.indexOf('firstname');
    const fieldIdx = dbFieldNames.indexOf('field');

    if (firstNameIdx === -1 || fieldIdx === -1) {
      throw new Error('Cannot load the database');
    }

    const studentGroups = {};

    rows.forEach((line) => {
      const studentRecord = line.trim().split(',');

      if (studentRecord.length < dbFieldNames.length) return;

      const firstName = studentRecord[firstNameIdx];
      const field = studentRecord[fieldIdx];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      studentGroups[field].push(firstName);
    });

    return studentGroups;
  } catch (error) {
    return Promise.reject(new Error('Cannot load the database'));
  }
}

export default readDatabase;
