// app.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Azure VM CI/CD Pipeline!");
});

app.listen(port, () => {
  console.log('App listening on port ${port}');
});
