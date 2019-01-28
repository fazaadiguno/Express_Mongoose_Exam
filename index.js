//jshint esversion:6

const express = require("express");
const app = express();
const route = require("./route/route");


app.use(route);

app.get("/", (req, res) => {
  res.send({ "status": "Server active" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
