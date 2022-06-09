const fsPromises = require("fs/promises");
const { v4: uuidv4 } = require("uuid");

class Model {
  #path;

  constructor(path) {
    this.#path = path;
  }

  readFile = async () => {
    const data = await fsPromises.readFile(this.#path, "utf-8");
    return JSON.parse(data);
  };

  writeFile = (data) => fsPromises.writeFile(this.#path, JSON.stringify(data));

  async add() {
    let data = [];
    try {
      data = await this.readFile();
    } catch {}

    this.id = uuidv4();
    data.push(this);

    await this.writeFile(data);
  }
}

module.exports = Model;
