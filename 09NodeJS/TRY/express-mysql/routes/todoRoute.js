const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

router.get("/", todoController.getAllTodo);
router.get("/:id", todoController.getTodoById);
router.post("/", todoController.validateTodo, todoController.createTodo);
router.put("/:id", todoController.validateTodo, todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
