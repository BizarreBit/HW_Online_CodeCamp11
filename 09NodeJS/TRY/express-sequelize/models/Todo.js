const { DataTypes } = require("sequelize");
const sequelize = require("./connect");

const Todo = sequelize.define(
  "todo",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Todo;
