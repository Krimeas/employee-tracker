const mysql = require('mysql2');

const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // REMOVE THIS BEFORE UPLOAD
    password: 'Kamisera22!',
    database: 'employee_tracker_db'
  },
  console.log(`Connected to the employee_tracker_db database.`)
  );

connection.connect(function(err) {
  if (err) throw err
});

module.exports = connection;