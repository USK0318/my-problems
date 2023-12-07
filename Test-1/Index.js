const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',  // Your local MySQL server address
    user: 'root',  // Your MySQL username
    password: '20A25B0318',  // Your MySQL password
    database: 'de', //Your database Schema
    port: 3306,
});

// checking the Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Define a route to fetch data from the database
app.get('/info', (req, res) => {
  connection.query('SELECT * FROM user_info', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error or Database connection Error' });
      return;
    }  
  
    // Send the fetched data as an API response
    res.json({ data: results });
  });
});

//------------------------------------------------------------------
//       it is an other call for the different table
//------------------------------------------------------------------

// Define a route to fetch data from the database
app.get('/city', (req, res) => {
  connection.query('SELECT * FROM city', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error or Database connection Error' });
      return;
    }  
  
    // Send the fetched data as an API response
    res.json({ data: results });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

