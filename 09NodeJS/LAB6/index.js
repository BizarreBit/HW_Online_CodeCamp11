const express = require("express");
// const fs = require("fs");
const fsPromises = require("fs/promises");

const app = express();

app.get("/sum/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.send(`Parameter คือ a = ${a} และ b = ${b}; a + b = ${a + b}`);
});

app.post("/products/:id", (req, res) => {
  res.send(`Parameter คือ id = ${req.params.id}`);
});

app.get("/users/:id/bookings/:bId", (req, res) => {
  const { id, bId } = req.params;
  res.send(`Parameter คือ id = ${id} และ bId = ${bId}`);
});

// app.get("/countries/:commonName", (req, res) => {
//   fs.readFile("./country.json", "utf-8", (err, data) => {
//     const country = JSON.parse(data).filter(
//       (item) =>
//         item.name.common.toLowerCase() === req.params.commonName.toLowerCase()
//     );
//     res.json({ country: country[0] });
//   });
// });

app.get("/countries/:commonName", async (req, res) => {
  const { commonName } = req.params;
  const data = await fsPromises.readFile("./country.json", "utf-8");
  const country = JSON.parse(data).filter(
    (item) => item.name.common.toLowerCase() === commonName
  );
  country.length > 0
    ? res.json({ country: country[0] })
    : res.json({ country: null });
});

app.listen(8888, () =>
  console.log("LAB6 Path Parameter listening on port 8888")
);
