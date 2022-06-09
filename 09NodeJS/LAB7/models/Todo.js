const { v4: uuidv4 } = require("uuid");
const fsPromises = require("fs/promises");

class Todo {
  constructor(title, completed = false, dueDate) {
    this.title = title;
    this.completed = completed;
    this.dueDate = dueDate ? new Date(dueDate) : null;
  }

  readTodo = async () => {
    const data = await fsPromises.readFile("todoList.json", "utf-8");
    return JSON.parse(data);
  };

  saveTodo = (data) =>
    fsPromises.writeFile("todoList.json", JSON.stringify(data));

  async save() {
    const data = await this.readTodo();
    this.id = uuidv4();
    data.push(this);
    await this.saveTodo(data);
  }
}

// new Todo(title, completed, dueDate);

module.exports = Todo;
