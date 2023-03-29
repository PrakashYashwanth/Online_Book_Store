const mysql = require("mysql");

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "yash1234",
  database: "online_book_store",
});

module.exports = pool;
