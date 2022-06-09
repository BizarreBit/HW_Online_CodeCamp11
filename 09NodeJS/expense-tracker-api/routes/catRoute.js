const express = require("express");
const {
  createCategory,
  getCategoryList,
  updateCategory,
  deleteCategory,
} = require("../controllers/catController");

const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategoryList);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
