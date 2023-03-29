const connection = require("./db");

const executeQuery = async (query, values) => {
  try {
    const getConnection = await connection;
    const [rows] = await getConnection.query(query, values);
    return rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = executeQuery;
