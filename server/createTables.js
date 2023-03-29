const { executeQuery } = require("./dbQuery");
const { booksTableSchema, usersTableSchema } = require("./tablesSchema");

module.exports = {
  createTables: () => {
    executeQuery(booksTableSchema, [], (err, results, fields) => {
      if (err) throw err;
      console.log("Books table created successfully");
    });

    executeQuery(usersTableSchema, [], (err, results, fields) => {
      if (err) throw err;
      console.log("Users table created successfully");
    });
  },
};
