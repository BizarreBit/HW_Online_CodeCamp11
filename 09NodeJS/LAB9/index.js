const express = require("express");

const app = express();

app.use(express.static("public"));
app.use("/static", express.static("public"));

app.listen(8888, () =>
  console.log("LAB9 Static Files server: listening on port 8888")
);
