const pool = require("./db");

module.exports = {
  // Define methods for executing SQL queries
  executeQuery: (query, params, callback) => {
    pool.getConnection((err, connection) => {
      if (err) return callback(err);

      connection.query(query, params, (err, results, fields) => {
        connection.release();
        if (err) return callback(err);
        callback(null, results, fields);
      });
    });
  },
};
