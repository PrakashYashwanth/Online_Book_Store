const express = require("express");
const router = express.Router();

require("./routes/login")(router);
// require("./routes/signup")(router);

module.exports = router;
