module.exports = {
  usersTableSchema: `
    CREATE TABLE IF NOT EXISTS users (
      id INT(11) NOT NULL AUTO_INCREMENT,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    )
  `,

  booksTableSchema: `
    CREATE TABLE IF NOT EXISTS books (
      id INT(11) NOT NULL AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      author VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      PRIMARY KEY (id)
    )
  `,
};
