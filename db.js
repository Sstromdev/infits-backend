const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Subodh@8238',
  database: 'node_practice'
});

db.connect((err) => {
  if (err) {
    console.log('❌ MySQL connection failed');
    console.log(err);
  } else {
    console.log('✅ MySQL connected');
  }
});

module.exports = db;