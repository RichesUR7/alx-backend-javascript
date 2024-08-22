const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

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
 * Define a route handler for GET requests made to the path '/available_payments'.
 * This handler sends the response with available payment methods.
 */
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

/**
 * Define a route handler for POST requests made to the path '/login'.
 * This handler sends the response 'Welcome :username'.
 */
app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});

/**
 * Start the server to listen for incoming connections.
 * A message is logged to the console once the server is ready.
 */
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
