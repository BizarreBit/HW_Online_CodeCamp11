const express = require("express");
const logController = require("../controllers/logController");

const router = express.Router();

router.get("/", logController.getAllLog);
router.get("/:id", logController.getLogById);
router.post("/", logController.validate, logController.addLog);
router.delete("/:id", logController.deleteLog);
router.put("/:id", logController.validate, logController.updateLog);

module.exports = router;
