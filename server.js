const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit-login', (req, res) => {
  const username = req.body.uname;
  const password = req.body.psw;
  
  // You can perform validation and authentication here

  // For now, let's just send a simple response
  res.send(`Welcome, ${username}!`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});