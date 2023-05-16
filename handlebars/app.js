const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Configure Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Define a route for the login page
app.get('/login', (req, res) => {
  res.render('login');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
