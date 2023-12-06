const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3001;

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'database-2.cx7du5eaphdp.us-east-1.rds.amazonaws.com',  // Your local MySQL server address
    user: 'admin',  // Your MySQL username
    password: '20A25B0318',  // Your MySQL password
    database: 'ap_survey', 
    port: 3306,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Define a route to fetch data from the database
app.get('/api/data', (req, res) => {
  // Perform a query to fetch data (replace with your own query)
  connection.query('SELECT * FROM CPRO', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
  
    console.log('Query results:', results);
  
    // Send the fetched data as an API response
    res.json({ data: results });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
