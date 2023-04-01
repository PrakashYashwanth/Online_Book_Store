const connection = require("./db");

//This function takes in query, values and returns an array of objects of output rows
const executeQuery = async (query, values) => {
  try {
    const [rows] = await connection.query(query, values);
    return rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = executeQuery;
