const express = require("express");
const app = express();
const cors = require("cors");
const { createTables } = require("./createTables");
const api = require("./api");

//Initiating tables
createTables();

//Middlewares

//using cors middleware to allow cross origin requests
app.use(cors());

//using json parser to extract body data from requests
app.use(express.json());

app.use("/api", api);

const PORT = 5000;

// app.post('/books', (req, res) => {
//   const { title, author, price } = req.body;
//   const insertQuery = `
//     INSERT INTO books (title, author, price) VALUES (?, ?, ?)
//   `;
//   db.executeQuery(insertQuery, [title, author, price], (err, results, fields) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json({ success: true });
//   });
// });

app.listen(PORT, () => console.log(`app running on port ${PORT}`));
