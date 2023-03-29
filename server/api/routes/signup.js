const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const executeQuery = require("../../dbQuery");

module.exports = (router) => {
  router.post("/signup", async (req, res) => {
    const { userName: username, password, email } = req.body;

    // Check if the user already exists in the database
    const checkUserQuery =
      "SELECT * FROM users WHERE username = ? OR email = ?";
    const checkUserValues = [username, email];
    const userExists = await executeQuery(checkUserQuery, checkUserValues);

    if (userExists.length > 0) {
      return res
        .status(400)
        .json({ message: "Username or email already in use" });
    }

    // Hash the password before storing it in the database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Insert the user into the database
    const insertUserQuery =
      "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
    const insertUserValues = [username, hashedPassword, email];
    await executeQuery(insertUserQuery, insertUserValues);
    // Generate a JWT token
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "User registered successfully", token });
  });
};
