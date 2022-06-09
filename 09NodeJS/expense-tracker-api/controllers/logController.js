const uuid = require("uuid");

// Resource: log
// {
//     id (type: string, format: uuid): "uuid",
//     title (type: string, required): "PTT",
//     date (type: string, format: date): "2022-12-31",
//     amount (type: number, format: decimal floating point, required): "100",
//     categoryId (type: string, format: uuid): "uuid",
//     comment (type: string): ""
// }
const Log = require("../models/Log");
const { idValidator: catIdValidator } = require("./catController");

const idValidator = async (id) => {
  if (id === undefined)
    return { fail: true, status: 400, msg: { msg: "Log Id Required" } };
  if (!uuid.validate(id))
    return {
      fail: true,
      status: 400,
      msg: { msg: "Log Id Must Be UUID Format" },
    };

  let idx = -1;
  let logs = [];
  try {
    logs = await new Log().readFile();
    idx = logs.findIndex((item) => item.id === id);
  } catch {}

  if (idx === -1)
    return { fail: true, status: 400, msg: { msg: "Log Id Not Found" } };

  return { idx, logs, fail: false };
};

const bodyValidator = async (body) => {
  const { title, date, amount, categoryId, comment = "" } = body;

  if (title === undefined)
    return { status: 400, msg: { msg: "Title Required" } };
  if (typeof title !== "string")
    return { status: 400, msg: { msg: "Title Must Be String" } };
  if (title.trim() === "")
    return { status: 400, msg: { msg: "Title Required" } };

  if (date !== undefined && isNaN(new Date(date).getTime())) {
    return { status: 400, msg: { msg: "Date Invalid Format" } };
  }

  if (amount === undefined)
    return { fail: true, status: 400, msg: { msg: "Amount Required" } };
  if (!(typeof amount === "number" && amount > 0))
    return {
      status: 400,
      msg: { msg: "Amount Must Be Positive Decimal" },
    };

  if (typeof comment !== "string")
    return {
      status: 400,
      msg: { msg: "Comment Must Be String" },
    };

  const catIdValidate = await catIdValidator(categoryId);
  if (catIdValidate.fail) return catIdValidate;

  return null;
};

// Create
// POST /logs
// parameter: body { title, date, amount, categoryId, comment }
// response:
// 201 Created { log: newly created log object }
// 400 Bad Request { msg: "Title Required."}
// 500 Internal Server Error { msg: "Internal Server Error" }

const createLog = async (req, res, next) => {
  try {
    const bodyValidate = await bodyValidator(req.body);
    if (bodyValidate)
      return res.status(bodyValidate.status).json(bodyValidate.msg);

    const { title, date, amount, categoryId, comment = "" } = req.body;
    const log = new Log(title, date, amount, categoryId, comment);
    await log.add();

    res.status(201).json({ log });
  } catch (err) {
    next(err);
  }
};

// Read
// GET /logs
// parameter: query { limit, offset }
// response:
// 200 Ok { logs: [log objects] }
// 400 Bad Request { msg: "Limit Must Be Numeric" }
// 500 Internal Server Error { msg: "Internal Server Error" }

const getLogList = async (req, res, next) => {
  try {
    const { limit, offset = 0 } = req.query;
    if (
      limit !== undefined &&
      typeof limit !== "number" &&
      limit % 1 !== 0 &&
      limit > 0
    )
      return res.status(400).json({ msg: "Limit Must Be Positive Integer" });
    if (typeof offset !== "number" && offset % 1 !== 0 && offset >= 0)
      return res
        .status(400)
        .json({ msg: "Offset Must Be Zero Or Positive Integer" });

    let logs = await new Log().readFile();
    limit
      ? (logs = logs.slice(offset, offset + limit))
      : (logs = logs.slice(offset));
    res.json({ logs });
  } catch (err) {
    next(err);
  }
};

// GET /logs/:id
// parameter: path parameter { id }
// response:
// 200 Ok { log: log object or null }
// 400 Bad Request { msg: "Id Invalid Format" }
// 500 Internal Server Error { msg: "Internal Server Error" }

const getLog = async (req, res, next) => {
  try {
    const { id } = req.params;

    const idValidate = await idValidator(id);
    if (idValidate.fail)
      return res.status(idValidate.status).json(idValidate.msg);

    const { idx, logs } = idValidate;

    res.json({ log: logs[idx] });
  } catch (err) {
    next(err);
  }
};

// Update /logs/:id
// parameter: path parameter { id }. body { title, date, amount, categoryId, comment }
// response:
// 200 Ok { log: updated log object }
// 400 Bad Request { msg: "Title Required."}
// 500 Internal Server Error { msg: "Internal Server Error" }

const updateLog = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const idValidate = await idValidator(id);
    if (idValidate.fail)
    return res.status(idValidate.status).json(idValidate.msg);
    const bodyValidate = await bodyValidator(req.body);
    if (bodyValidate)
    return res.status(bodyValidate.status).json(bodyValidate.msg);
    
    const { title, date, amount, categoryId, comment = "" } = req.body;
    const { idx, logs } = idValidate;
    logs[idx] = {...logs[idx], title, date, amount, categoryId, comment};
    await new Log().writeFile(logs);

    res.json({ log: logs[idx] });
  } catch (err) {
    next(err);
  }
};

// Delete
// DELETE /logs/:id
// parameter: path parameter { id }
// response:
// 204 No Content
// 400 Bad request { message: Id Not Found }
// 500 Internal server error { message: "Internal server error"}

const deleteLog = async (req, res, next) => {
  try {
    const { id } = req.params;

    const idValidate = await idValidator(id);
    if (idValidate.fail)
      return res.status(idValidate.status).json(idValidate.msg);

    const { idx, logs } = idValidate;
    logs.splice(idx, 1);
    await new Log().writeFile(logs);

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};

module.exports = { createLog, getLogList, getLog, updateLog, deleteLog };
