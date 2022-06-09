const express = require("express");
const {
  createLog,
  getLogList,
  getLog,
  updateLog,
  deleteLog,
} = require("../controllers/logController");

const router = express.Router();

router.post("/", createLog);
router.get("/", getLogList);
router.get("/:id", getLog);
router.put("/:id", updateLog);
router.delete("/:id", deleteLog)

module.exports = router;
