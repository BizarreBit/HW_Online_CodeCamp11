const pool = require("../db/connect");

exports.validate = async (req, res, next) => {
  const { id } = req.params;
  const { name, type } = req.body;

  if (name === undefined)
    return res.status(400).json({ message: "'name' is required" });
  if (typeof name !== "string")
    return res.status(400).json({ message: "'name' must be string" });
  if (!name.trim())
    return res.status(400).json({ message: "'name' is required" });
  if (type !== "INCOME" && type !== "EXPENSE")
    return res
      .status(400)
      .json({ message: "'type' must be 'INCOME' or 'EXPENSE'" });

  const [[alreadyInDB]] = await pool.execute(
    "SELECT name FROM categories WHERE name = ? AND NOT id = ?",
    [name, id || 0]
  );
  if (alreadyInDB !== undefined)
    return res.status(400).json({ message: `'name': '${name}' already exist` });

  next();
};

exports.getAllCategory = async (req, res, next) => {
  try {
    const [categories] = await pool.execute("SELECT * FROM categories");

    res.json({ categories: categories || null });
  } catch (err) {
    next(err);
  }
};

exports.getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [[category]] = await pool.execute(
      "SELECT * FROM categories WHERE id = ?",
      [id]
    );

    res.json({ category: category || null });
  } catch (err) {
    next(err);
  }
};

exports.addCategory = async (req, res, next) => {
  try {
    const { name, type } = req.body;

    const [{ insertId }] = await pool.execute(
      "INSERT INTO categories (name, type) VALUES (?, ?)",
      [name, type]
    );

    res.status(201).json({ category: { id: insertId, name, type } });
  } catch (err) {
    next(err);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [{ affectedRow }] = await pool.execute(
      "DELETE FROM categories WHERE id = ?",
      [id]
    );
    if (affectedRow) return res.status(400).json({ message: "'id' not found" });

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, type } = req.body;

    const [result] = await pool.execute(
      "UPDATE categories SET name = ?, type = ? WHERE id = ?",
      [name, type, id]
    );
    if (result.affectedRows === 0)
      return res.status(400).json({ message: "'id' not found" });
    if (result.changedRows === 0)
      return res.status(400).json({ message: "Unchanged" });

    res.json({ category: { id, name, type } });
  } catch (err) {
    next(err);
  }
};
