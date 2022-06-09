require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const todoRouter = require("./routes/todoRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/todos", todoRouter);

app.use((req, res) => res.status(404).json({ message: "Resource not found" }));

app.use((err, req, res, next) => {
  console.log(err);
  let code = 500;
  if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError")
    code = 401;
  if (process.env.NODE_ENV === "development")
    res.status(code).json({ message: err.message });
  res.status(code).json({ message: "Something Wrong" });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Todo List with security: port ${port}`));
