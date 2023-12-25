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
const sql = require('mssql');

// Database configuration
const config = {
  user: 'your_username',
  password: 'your_password',
  server: 'your_server',
  database: 'your_database',
  options: {
    encrypt: true // If you are using Azure
  }
}; 
sql.connect(config, (err) => {
  if (err) {
    console.log(err);
    res.status(500).send('Database error');
  } else {
    // Query the database
    new sql.Request()
      .query(`SELECT * FROM Users WHERE username='${username}' AND password='${password}'`, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Database error');
        } else {
          if (result.recordset.length > 0) {
            res.send(`Welcome, ${username}!`);
          } else {
            res.send('Invalid username or password');
          }
        }
        sql.close();
      });
  }})