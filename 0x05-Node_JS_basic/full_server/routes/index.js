import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Maps routes to their respective controllers.
 * @param {Object} app - The Express application instance.
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
