const express = require("express");
const fsPromises = require("fs/promises");
const uuid = require("uuid");

const app = express();

app.use(express.urlencoded({ extended: false })); // false parsing by queryString, true parsing by qs

//1.
app.get("/users", (req, res) => {
  const { id, email } = req.body;
  res.send(`มี id: ${id} และ email: ${email}`);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send(`มี email: ${email} และ password: ${password}`);
});

app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const { name, price, description } = req.body;
  res.send(
    `มี id: ${id}, name: ${name}, price: ${price}, description: ${description}`
  );
});

app.delete("/products", (req, res) => {
  const productId = req.body.productId;
  res.send(`มี productId: ${productId}`);
});

//2.
// app.use(express.json());

// const todoListPath = "./todolist.json";

// app.get("/todos", async (req, res, next) => {
//   try {
//     const data = await fsPromises.readFile(todoListPath, "utf-8");
//     res.json({ todos: JSON.parse(data) });
//   } catch (err) {
//     next(err);
//   }
// });

// app.get("/todos/:id", async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     if (!uuid.validate(id))
//       return res.status(400).json({ message: "Id Not UUID Format" });

//     const data = await fsPromises.readFile(todoListPath, "utf-8");
//     const todoList = JSON.parse(data);
//     const idx = todoList.findIndex((item) => item.id === id);
//     if (idx === -1) return res.status(404).json({ message: "Id Not Found" });

//     res.json({ todo: todoList[idx] });
//   } catch (err) {
//     next(err);
//   }
// });

// app.post("/todos", async (req, res, next) => {
//   try {
//     const { title, completed, dueDate } = req.body;

//     const date = new Date(dueDate);

//     if (!(title && typeof completed === "boolean" && date))
//       return res.status(400).json({ message: "TodoList Wrong Format" });

//     const data = await fsPromises.readFile(todoListPath, "utf-8");
//     const todoList = JSON.parse(data);

//     const newTodo = {
//       id: uuid.v4(),
//       title: title,
//       completed: completed,
//       dueDate: date.toISOString(),
//     };
//     todoList.unshift(newTodo);

//     await fsPromises.writeFile(
//       todoListPath,
//       JSON.stringify(todoList),
//       "utf-8"
//     );

//     res.status(201).json({ todo: newTodo });
//   } catch (err) {
//     next(err);
//   }
// });

// app.delete("/todos/:id", async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     if (!uuid.validate(id))
//       return res.status(400).json({ message: "Id Not UUID Format" });

//     const data = await fsPromises.readFile(todoListPath, "utf-8");
//     const todoList = JSON.parse(data);
//     const idx = todoList.findIndex((item) => item.id === id);
//     if (idx === -1) return res.status(404).json({ message: "Id Not Found" });

//     todoList.splice(idx, 1);
//     await fsPromises.writeFile(todoListPath, JSON.stringify(todoList), "utf-8");

//     res.json({ message: "success" });
//   } catch (err) {
//     next(err);
//   }
// });

// app.put("/todos/:id", async (req, res, next) => {
//   try {
//     const { title, completed, dueDate } = req.body;
//     const date = new Date(dueDate);

//     if (!(title && typeof completed === "boolean" && date))
//       return res.status(400).json({ message: "TodoList Wrong Format" });

//     const id = req.params.id;
//     if (!uuid.validate(id))
//       return res.status(400).json({ message: "Id Not UUID Format" });

//     const data = await fsPromises.readFile(todoListPath, "utf-8");
//     const todoList = JSON.parse(data);
//     const idx = todoList.findIndex((item) => item.id === id);
//     if (idx === -1) return res.status(404).json({ message: "Id Not Found" });

//     todoList[idx] = { id: req.params.id, title, completed, dueDate };
//     await fsPromises.writeFile(todoListPath, JSON.stringify(todoList), "utf-8");

//     res.json({ todo: todoList[idx] });
//   } catch (err) {
//     next(err);
//   }
// });

// app.use((req, res) => {
//   res.status(404).json({ message: "404 Not Found" });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message });
// });

//2. Answer
// CRUD create read update delete
// REST API

const todoRouter = require("./routes/todoRoute");
const userRouter = require("./routes/userRoute");

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/todos", todoRouter);
app.use("/users", userRouter)

// Path not found
app.use((req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

// Handle Error
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

app.listen(8888, () =>
  console.log("LAB7 Request Body server listening on port 8888")
);
