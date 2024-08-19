const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;
const databaseFile = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Reads the CSV file and returns student statistics.
 * @param {string} dataFilePath - The path to the CSV data file.
 * @returns {Promise<string>} - A promise that resolves to a string with student statistics.
 */
const countStudents = (dataFilePath) => new Promise((resolve, reject) => {
  fs.readFile(dataFilePath, 'utf8')
    .then((fileContent) => {
      const lines = fileContent.trim().split('\n');

      if (lines.length < 2) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const [header, ...rows] = lines;
      const fieldNames = header.split(',');
      const studentProps = fieldNames.slice(0, -1);

      // Create a map to hold the student groups
      const studentGroups = rows.reduce((acc, row) => {
        const studentData = row.split(',');
        if (studentData.length === fieldNames.length) {
          const student = Object.fromEntries(
            studentProps.map((prop, idx) => [prop, studentData[idx]]),
          );
          const field = studentData[studentData.length - 1];
          if (!acc.has(field)) acc.set(field, []);
          acc.get(field).push(student);
        }
        return acc;
      }, new Map());

      const totalStudents = Array.from(studentGroups.values()).reduce(
        (sum, students) => sum + students.length,
        0,
      );

      // Build the result string
      let result = `Number of students: ${totalStudents}`;
      studentGroups.forEach((students, field) => {
        const studentNames = students
          .map((student) => student.firstname)
          .join(', ');
        result += `\nNumber of students in ${field}: ${students.length}. List: ${studentNames}`;
      });

      resolve(result);
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});

// Route for the root path
app.get('/', (_, res) => {
  const responseText = 'Hello Holberton School!';
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(responseText),
  });
  res.end(responseText);
});

// Route for the /students path
app.get('/students', (_, res) => {
  countStudents(databaseFile)
    .then((studentData) => {
      const responseText = `This is the list of our students\n${studentData}`;
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength(responseText),
      });
      res.end(responseText);
    })
    .catch((error) => {
      const errorMessage = `This is the list of our students\n${error.message}`;
      res.writeHead(500, {
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength(errorMessage),
      });
      res.end(errorMessage);
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

module.exports = app;
