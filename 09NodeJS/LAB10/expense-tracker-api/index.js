const express = require("express");
const categoryRoute = require("./routes/categoryRoute");
const logRoute = require("./routes/logRoute");

const app = express();

app.use(express.json());

app.use("/categories", categoryRoute);
app.use("/logs", logRoute);

app.use((req, res, next) =>
  res.status(404).json({ message: "Resource Not Found" })
);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

app.listen(8000, () =>
  console.log("Expense tracker with Express and MySQL2 listening on port 8000")
);
