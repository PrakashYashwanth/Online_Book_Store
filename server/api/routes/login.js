const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const executeQuery = require("../../dbQuery");

module.exports = (router) => {
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists in the database
    const checkUserQuery = "SELECT * FROM users WHERE email = ?";
    const checkUserValues = [email];
    const user = await executeQuery(checkUserQuery, checkUserValues);

    if (user.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // Compare the password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "User logged in successfully", token });
  });
};
