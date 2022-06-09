const jwt = require("jsonwebtoken");
const { Todo } = require("../models");

exports.getAllTodo = async (req, res, next) => {
  try {
    const todos = await Todo.findAll({ where: { userId: req.user.id } });
    res.json({ todos });
  } catch (err) {
    next(err);
  }
};

exports.getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ where: { userId: req.user.id, id } });
    res.json({ todo });
  } catch (err) {
    next(err);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    // const { title, completed, userId } = req.body;
    const { title, completed } = req.body; // get userId from token instead

    const todo = await Todo.create({ title, completed, userId: req.user.id });

    res.status(201).json({ todo });
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const [affectedRow] = await Todo.update(
      { title, completed, userId: req.user.Id },
      { where: { id, userId: req.user.id } }
    );

    if (affectedRow === 0)
      return res.status(400).json({ message: "can't update todo" });

    const todo = await Todo.findOne({ where: { id } });
    res.json({ todo });
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const affectedRow = await Todo.destroy({
      where: { id, userId: req.user.id },
    });
    if (affectedRow === 0)
      return res.status(400).json({ message: "can't delete todo" });

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
