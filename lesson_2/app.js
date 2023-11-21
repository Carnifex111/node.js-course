const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.end("Привет, студенты!");
});

app.listen(3000);
