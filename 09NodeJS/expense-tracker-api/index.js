const express = require("express");
const logRouter = require("./routes/logRoute");
const catRouter = require("./routes/catRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/logs", logRouter);
app.use("/categories", catRouter);

app.use((req, res) => res.status(404).json({ msg: "Resource Not Found" }));
app.use((err, req, res, next) => res.status(500).json({ msg: err.message }));

app.listen(8080, () => console.log("Server started on port 8080"));
