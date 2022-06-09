//1.
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//2.
// app.get("/", (req, res) => res.json({ message: "root path" }));
// app.use((req, res) => res.status(404).json({ message: "path not found on this server" }));

//3.
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ message: `${req.method} todos` });
});
router.post("/", (req, res) => {
  res.json({ message: `${req.method} todos` });
});
router.put("/", (req, res) => {
  res.json({ message: `${req.method} todos` });
});
router.patch("/", (req, res) => {
  res.json({ message: `${req.method} todos` });
});
router.delete("/", (req, res) => {
  res.json({ message: `${req.method} todos` });
});

app.use("/todos", router);

//4.
const axios = require("axios");

app.get("/dog", async (req, res, next) => {
  try {
    // const fetch = await axios.get("https://dog.ceo/api/breeds/image/random");
    const fetch = await axios.get("https://dog.ceo/api/breeds/image/andom");
    // res.send(`<img src=${fetch.data.message}>`);
    res.json({ pic: fetch.data.message });
  } catch (err) {
    next(err);
  }
});
app.use("/dog", (err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(8888, () =>
  console.log("LAB8 Middleware server: listening on port 8888")
);
