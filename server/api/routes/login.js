const pool = require("../../db");

module.exports = (router) => {
  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    // Check if the username or email already exists in the database
    pool.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password],
      (error, results) => {
        if (error) {
          res.status(500).json({
            error: true,
            message: "Error checking for existing user",
          });
        } else if (results.length > 0) {
          console.log(results);
          const { username: userName } = results[0];
          res.status(200).json({
            data: userName,
            success: true,
            message: "Success",
          });
        } else {
          // Insert the new user into the database
          res.status(404).json({
            error: true,
            message: "User doesn't exist",
          });
        }
      }
    );
  });
};
