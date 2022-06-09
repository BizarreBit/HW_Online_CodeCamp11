const { v4: uuidv4 } = require("uuid");
const fsPromises = require("fs/promises");
const Todo = require("../models/Todo")

const readTodo = async () => {
  const data = await fsPromises.readFile("todoList.json", "utf-8");
  return JSON.parse(data);
};

const saveTodo = (data) =>
  fsPromises.writeFile("todoList.json", JSON.stringify(data));

const isPosInt = (input) =>
  typeof input !== "number" && input > 0 && input % 1 === 0;


// Resource: todo :
// {
//   id (type: string, format: uuid): "uuid",
//   title (type: string, required): "Meeting",
//   completed (type: boolean, default: false) : true,
//   dueDate (type: string, format: date, default: null): "2021-09-01T0:0:0"
// }

// Create
// POST /todos
// parameter: body { title, completed, dueDate }
// response:
// 201 Created { todo: { id, title, completed, dueDate }}
// 400 Bad request { message: "title is required" }
// 500 Internal server error { message: "Internal server error"} // unspecified error description on production line

const createTodo = async (req, res, next) => {
  try {
    const { title, completed, dueDate } = req.body;
    // if (title === undefined || title === null || title.trim()) {} (number).trim cause error
    if (typeof title !== "string")
      return res.status(400).json({ message: "title must be string" });
    if (title.trim() === "")
      return res.status(400).json({ message: "title is required" });
    if (typeof completed !== "boolean" && completed !== undefined)
      return res.status(400).json({ message: "completed must be a boolean" });
    if (dueDate !== undefined && isNaN(new Date(dueDate).getTime()))
      return res.status(400).json({ message: "dueDate is invalid format" });

    // const newTodo = {
    //   title,
    //   id: uuidv4(),
    //   completed: completed ?? false,
    //   dueDate: dueDate ? new Date(dueDate) : null,
    // };

    const newTodo = new Todo(title,completed, dueDate)   //models connection via class for visualize only (MVC)

    // const todos = await readTodo();
    // todos.push(newTodo);
    // await saveTodo(todos);

    await newTodo.save()   //models connection via class for visualize only (MVC)

    res.status(201).json({ todo: newTodo });
    // res.render(viewTemplatingEngine)
  } catch (err) {
    next(err);
  }
};

// Read
// GET /todos
// parameter: query {limit, offset, orderBy=dueDate+direction, field=title+duedate }
// response:
// 200 Ok { todos: [todo object]}
// 400 Bad request { message: "limit must be numeric" }
// 500 Internal server error { message: "Internal server error"} // unspecified error description on production line

const getTodos = async (req, res, next) => {
  try {
    const { limit, offset, orderBy, field } = req.query;
    if (limit !== undefined && isPosInt(limit))
      return res
        .status(400)
        .json({ message: "limit must be a positive integer" });
    if (offset !== undefined && isPosInt(offset))
      return res
        .status(400)
        .json({ message: "offset must be a positive integer" });

    const todos = await readTodo();
    res.json({ todos });
  } catch (err) {
    next(err);
  }
};

// GET /todos/:id
// parameter: path parameter { id }
// response:
// 200 Ok { todo: todo object or null }
// 500 Internal server error { message: "Internal server error"} // unspecified error description on production line

const getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todos = await readTodo();
    const todo = todos.find((item) => item.id === id);
    res.json({ todo: todo || null });
  } catch (err) {
    next(err);
  }
};

// Update
// PUT /todos/:id
// parameter: body { title, completed, dueDate }, path parameter { id }
// response:
// 200 Ok { todo: updated todo object }
// 400 Bad request { message: "title is required" }
// 500 Internal server error { message: "Internal server error"} // unspecified error description on production line

const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, completed, dueDate } = req.body;

    if (typeof title !== "string")
      return res.status(400).json({ message: "title must be string" });
    if (title.trim() === "")
      return res.status(400).json({ message: "title is required" });
    if (typeof completed !== "boolean" && completed !== undefined)
      return res.status(400).json({ message: "completed must be a boolean" });
    if (dueDate !== undefined && isNaN(new Date(dueDate).getTime()))
      return res.status(400).json({ message: "dueDate is invalid format" });

    const todos = await readTodo();
    const idx = todos.findIndex((item) => item.id === id);

    if (idx === -1) return res.status(400).json({ message: "id not found" });

    todos[idx] = {
      ...todos[idx],
      title,
      completed: completed ?? todos[idx].completed,
      dueDate: dueDate ? new Date(dueDate) : todos[idx].dueDate,
    };

    await saveTodo(todos);
    res.json({ todo: todos[idx] });
  } catch (err) {
    next(err);
  }
};

// Delete
// DELETE /todos/:id
// parameter: path parameter { id }
// response:
// 204 No content
// 400 Bad request { message: id not found }
// 500 Internal server error { message: "Internal server error"} // unspecified error description on production line

const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todos = await readTodo();
    const idx = todos.findIndex((item) => item.id === id);
    if (idx === -1) return res.status(400).json({ message: "id not found" });
    todos.splice(idx, 1);
    await saveTodo(todos);
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};

module.exports = { createTodo, getTodos, getTodoById, updateTodo, deleteTodo };
