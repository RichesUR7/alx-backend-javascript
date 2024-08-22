const express = require('express');

const app = express();
const PORT = 7865;

/**
 * Define a route handler for GET requests made to the root path ('/').
 * This handler sends the response 'Welcome to the payment system'.
 */
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

/**
 * Define a route handler for GET requests made to the path '/cart/:id'.
 * The ':id' parameter must be a number.
 * This handler sends the response 'Payment methods for cart :id'.
 */
app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

/**
 * Start the server to listen for incoming connections.
 * A message is logged to the console once the server is ready.
 */
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
