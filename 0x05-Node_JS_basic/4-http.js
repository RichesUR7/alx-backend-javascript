const http = require('http');

const PORT = 1245;

/**
 * @module HTTP Server
 *
 * @returns {http.Server} The HTTP server.
 */
const app = http.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(responseText),
  });

  res.end(responseText);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

module.exports = app;
