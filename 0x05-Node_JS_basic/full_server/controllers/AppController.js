/**
 * Controller for handling requests to the homepage.
 */
class AppController {
  /**
   * Sends a greeting message.
   * @param {Object} request - The request object.
   * @param {Object} response - The response object.
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
