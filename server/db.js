const mysql = require("mysql2/promise");

// Create a MySQL connection pool
//createConnection for a single connection and createPool for multiple connections
const connection = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "yash1234",
  database: "online_book_store",
});

module.exports = connection;

// ALTER USER 'yourusername'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';
// use the above code for mysql connectivity issues
// ex :-  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yash1234';
