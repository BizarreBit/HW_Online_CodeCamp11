const { DataTypes } = require("sequelize");
const sequelize = require("./connect");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    // tableName: "user", // overide "inflection" library
    //   freezeTableName: true // use as is "User"
    timestamps: false,
  }
);

module.exports = User;
