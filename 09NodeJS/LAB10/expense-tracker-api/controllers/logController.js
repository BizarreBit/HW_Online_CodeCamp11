const pool = require("../db/connect");

exports.validate = (req, res, next) => {
  const { title, date, amount, categoryId, comment } = req.body;

  if (title === undefined)
    return res.status(400).json({ message: "'title' is required" });
  if (date === undefined)
    return res.status(400).json({ message: "'date' is required" });
  if (amount === undefined)
    return res.status(400).json({ message: "'amount' is required" });
  if (categoryId === undefined)
    return res.status(400).json({ message: "'categoryId' is required" });
  if (comment !== undefined && typeof comment !== "string")
    return res.status(400).json({ message: "'comment' must be string" });

  next();
};

exports.getAllLog = async (req, res, next) => {
  try {
    const [logs] = await pool.execute(
      `SELECT l.id, l.title, l.date, l.amount, 
      c.id AS categoryId, c.name AS category 
      FROM logs l JOIN categories c ON l.categoryId = c.id`
    );

    res.json({ logs: logs || null });
  } catch (err) {
    next(err);
  }
};

exports.getLogById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [[log]] = await pool.execute(
      `SELECT l.id, l.title, l.date, l.amount, 
        c.id AS categoryId, c.name AS category 
        FROM logs l JOIN categories c ON l.categoryId = c.id
        WHERE l.id = ?`,
      [id]
    );

    res.json({ log: log || null });
  } catch (err) {
    next(err);
  }
};

exports.addLog = async (req, res, next) => {
  try {
    const { title, date, amount, categoryId, comment } = req.body;

    const [{ insertId }] = await pool.execute(
      `INSERT INTO logs (title, date, amount, categoryId, comment)
        VALUES (?, ?, ?, ?, ?)`,
      [title, date, amount, categoryId, comment || null]
    );

    res.status(201).json({
      logs: { id: insertId, title, date, amount, categoryId, comment },
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteLog = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [{ affectedRow }] = await pool.execute(
      "DELETE FROM logs WHERE id = ?",
      [id]
    );
    if (affectedRow) return res.status(400).json({ message: "'id' not found" });

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};

exports.updateLog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, date, amount, categoryId, comment } = req.body;

    const [result] = await pool.execute(
      `UPDATE logs SET title = ?, date = ?, amount = ?, 
        categoryId = ?, comment = ? WHERE id = ?`,
      [title, date, amount, categoryId, comment || null, id]
    );
    if (result.affectedRows === 0)
      return res.status(400).json({ message: "'id' not found" });
    if (result.changedRows === 0)
      return res.status(400).json({ message: "Unchanged" });

    res.json({ log: { id, title, date, amount, categoryId, comment } });
  } catch (err) {
    next(err);
  }
};
