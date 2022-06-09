const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("cc10_todo_list", "root", "123456789", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
