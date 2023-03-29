const pool = require("../../db");

module.exports = (router) => {
  router.post("/api/signin", (req, res) => {
    const { userName: username, email, password } = req.body;

    // Check if the username or email already exists in the database
    pool.query(
      "SELECT * FROM users WHERE username = ? OR email = ?",
      [username, email],
      (error, results) => {
        if (error) {
          res.status(500).json({
            error: true,
            message: "Error checking for existing user",
          });
        } else if (results.length > 0) {
          // A user with the same username or email already exists in the database
          res.status(400).json({
            error: true,
            message: "Username or email already exists",
          });
        } else {
          // Insert the new user into the database
          pool.query(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [username, email, password],
            (error, results) => {
              if (error) {
                res.status(500).json({
                  error: true,
                  message: "Error inserting new user",
                });
              } else {
                res.status(201).json({
                  success: true,
                  message: "New user inserted successfully",
                });
              }
            }
          );
        }
      }
    );
  });
};
