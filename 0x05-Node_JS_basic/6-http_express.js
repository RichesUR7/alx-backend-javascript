const express = require('express');

const app = express();
const PORT = 1245;

/**
 * @module Express Server
 *
 * @returns {express.Express} The Express server.
 */

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
