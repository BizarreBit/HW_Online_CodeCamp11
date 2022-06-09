const pool = require("../db/connect");

exports.validateTodo = (req, res, next) => {
  const { title, completed, userId } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  next();
};

exports.createTodo = async (req, res, next) => {
  try {
    const { title, completed, userId } = req.body;

    // validate

    const [{ insertId }] = await pool.execute(
      "INSERT INTO todos (title, completed, user_id) VALUE (?, ?, ?)",
      [title, completed, userId]
    );
    res.status(201).json({ todo: { id: insertId, title, completed, userId } });
  } catch (err) {
    next(err);
  }
};

exports.getAllTodo = async (req, res, next) => {
  try {
    const [todos] = await pool.execute(
      `SELECT t.id AS todoId, t.title, t.completed, 
      u.id AS userId, u.username FROM todos t 
      JOIN users u ON t.user_id = u.id`
    );
    res.json({ todos });
  } catch (err) {
    next(err);
  }
};

exports.getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [[todo]] = await pool.execute(
      `SELECT t.id AS todoId, t.title, t.completed, 
      u.id AS userId, u.username FROM todos t 
      JOIN users u ON t.user_id = u.id WHERE t.id = ?`,
      [id]
    );
    console.log(todo);
    res.json({ todo: todo || null });
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const { title, completed, userId } = req.body;
    const { id } = req.params;
    // validate
    const result = await pool.execute(
      "UPDATE todos SET title = ?, completed = ?, user_id = ? WHERE id = ?",
      [title, completed, userId, id]
    );
    if (result[0].changedRows === 0) {
      return res.status(400).json({ message: "id not found" });
    }
    res.json({ todo: { id, title, completed, userId } });
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.execute("DELETE FROM todos WHERE id = ?", [id]);
    if (result[0].affectedRows === 0)
      return res.status(400).json({ massage: "id not found" });
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
