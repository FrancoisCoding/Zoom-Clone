const express = require("express");
const app = express();
const server = require("http").Server(app);

app.get("/", (req, res) => {
  res.status(200).send(`Server is listening on port 5000`);
});

server.listen(5000);
