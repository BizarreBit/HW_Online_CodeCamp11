const express = require("express");
const todoController = require("../controllers/todoController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", authController.authenticate, todoController.getAllTodo);
router.get("/:id", authController.authenticate, todoController.getTodoById);
router.post("/", authController.authenticate, todoController.createTodo);
router.put("/:id", authController.authenticate, todoController.updateTodo);
router.delete("/:id", authController.authenticate, todoController.deleteTodo);

module.exports = router;
