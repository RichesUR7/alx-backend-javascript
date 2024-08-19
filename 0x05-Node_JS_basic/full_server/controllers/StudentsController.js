import { readDatabase } from '../utils';

/**
 * Controller for handling requests related to students.
 */
class StudentsController {
  /**
   * Retrieves all students and their fields.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async getAllStudents(req, res) {
    const databasePath = process.argv.length > 2 ? process.argv[2] : '';
    try {
      const data = await readDatabase(databasePath);
      const keys = Object.keys(data);
      const fields = keys.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      let responseText = 'This is the list of our students\n';
      fields.forEach((field) => {
        responseText += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });
      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  /**
   * Retrieves students by major.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async getAllStudentsByMajor(req, res) {
    const databasePath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(databasePath);
      if (data[major]) {
        const responseText = `List: ${data[major].join(', ')}`;
        res.status(200).send(responseText);
      } else {
        res.status(500).send('Cannot load the database');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
