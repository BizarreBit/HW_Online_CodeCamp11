const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.get("/", categoryController.getAllCategory);
router.get("/:id", categoryController.getCategoryById);
router.post("/", categoryController.validate, categoryController.addCategory);
router.delete("/:id", categoryController.deleteCategory);
router.put("/:id", categoryController.validate, categoryController.updateCategory)

module.exports = router;