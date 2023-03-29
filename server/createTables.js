const executeQuery = require("./dbQuery");
const { booksTableSchema, usersTableSchema } = require("./tablesSchema");

module.exports = {
  createTables: async () => {
    try {
      await executeQuery(booksTableSchema, []);
      await executeQuery(usersTableSchema, []);
    } catch (err) {
      throw err;
    }
  },
};
