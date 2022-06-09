const express = require("express");
const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute");

const app = express();

app.use(express.json());

app.use("/users", userRoute);
app.use("/todos", todoRoute)

app.use((req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

app.listen(8001, () => console.log("Server running on port 8001"));
