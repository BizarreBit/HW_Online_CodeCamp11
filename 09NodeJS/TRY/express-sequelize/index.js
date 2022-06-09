const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize("cc10_todo_list", "root", "123456789", {
  host: "localhost",
  dialect: "mysql",
});

//connection test
sequelize
  .authenticate()
  .then(() => console.log("DB Conected"))
  .catch((err) => console.log(err.message));

//model
const User = sequelize.define(
  "User",
  {
    //dafault auto map to table users //abcd -> abcds
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
    //invisible properties (colomn) made by sequelize : createdAt , updatedAt
  },
  {
    // tableName: "user", // overide "inflection" library
    //   freezeTableName: true // use as is "User"
    timestamps: false,
  }
);

// // const user = new User({ username: "jamie" }); // { username: "jamie"}
// const user = User.build({ username: "jamie" }); // recommended syntax by sequelize
//
// //instance method
// user
//   .save()
//   .then((res) => {
//     console.log("execute save");
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// //static method
//create
// const userPromise = User.create({ username: "Federick" });
// userPromise
//   .then((res) => console.log(JSON.stringify(res, null, 2)))
//   .catch((err) => console.log(err));

//update
// User.update({ username: "Jonathan" }, { where: { id: 2 } }).then((res) =>
//   console.log(JSON.stringify(res, null, 4))
// );

//delete
// User.destroy({ where: { id: 10 } }).then((res) => console.log(res));

// User.create({ id: 10, username: "Bob" }).then((res) => console.log(res));
// not recommented to specify value to auto-incremented colomn

//select
// User.findAll({
//   where: {
//     id: 11,
//     username: "Federick",
//   },
// })
//   .then((res) => console.log(JSON.stringify(res, null, 2)))
//   .catch((err) => console.log(err));

//select with operator
// User.findAll({
//   where: {
//     id: {
//         // [Op.eq]: 11,
//         [Op.ne]: 11,
//      },
//     username: {
//         [Op.like]: "J%"
//     },
//   },
// })
//   .then((res) => console.log(JSON.stringify(res, null, 2)))
//   .catch((err) => console.log(err));

//select with operator (OR)
// User.findAll({
//   where: {
//     [Op.or]: [
//         { id: 11 },
//         { id: 2 },
//         { username: { [Op.like]: "j%" } }
//     ],
//     id: 1
//   },
// })
//   .then((res) => console.log(JSON.stringify(res, null, 2)))
//   .catch((err) => console.log(err));

//select with column specified, ordered, grouped by, limited, offsetted
// User.findAll({
//   where: {
//     // id: [1, 2, 3, 4, 5, 6],
//   },
//   //   attributes: ["username"],
//   attributes: {
//     exclude: "id",
//   },
//   //   order: ["username"],
//   order: [["username", "desc"], "id"],
//   group: ["username"],
//   limit: 5,
//   offset: 2
// })
//   .then((res) => console.log(JSON.stringify(res, null, 2)))
//   .catch((err) => console.log(err));

// with aggregate function
// User.findAll({
//   //   attributes: [sequelize.fn("count", sequelize.col("id"))],  //Executing (default): SELECT count(`id`) FROM `Users` AS `User`;  //count(`id`) can't be named in javascript via stringify
//   //   attributes: ["id", ["username", "uname"]],
//   //   attributes: [[sequelize.fn("count", sequelize.col("id")), "count"]],
//   attributes: [[sequelize.fn("max", sequelize.col("id")), "maxId"], "username"],
//   group: ["username"],
// })
//   .then((res) => console.log(JSON.stringify(res, null, 2)))
//   .catch((err) => console.log(err));

// Try it yourself
const Todo = sequelize.define(
  "todo",
  {
    //   can omit if column has `id` as name
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
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
      //   references: {
      //     model: User,
      //     key: "id",
      //   },
    },
  },
  {
    timestamps: false,
  }
);

// Todo.findAll()
//   .then((res) => console.log(JSON.stringify(res, null, 2)))
//   .catch((err) => console.log(err));

// Todo.create({ title: "#5$&acbd", userId: 1 }).catch((err) => console.log(err));

//Association define
User.hasMany(Todo, { foreignKey: "userId" });
// Todo.belongsTo(User);
Todo.belongsTo(User, { foreignKey: "userId" });

// User.findAll({ include: Todo }) // Eager Loading { include: Model }
//   .then((res) => console.log(JSON.stringify(res, null, 2)))
//   .catch((err) => console.log(err));

// Todo.findAll({ include: User })
//   .then((res) => console.log(JSON.stringify(res, null, 2)))
//   .catch((err) => console.log(err));

// with Todo.belongsTo(User);
//  original: Error: Unknown column 'todos.UserId' in 'field list'
// SELECT `User`.`id`, `User`.`username`, `todos`.`id` AS `todos.id`, `todos`.`title` AS `todos.title`, `todos`.`completed` AS `todos.completed`, `todos`.`user_id` AS `todos.userId`,
// `todos`.`UserId` AS `todos.UserId`
//  FROM `Users` AS `User` LEFT OUTER JOIN `todos` AS `todos` ON `User`.`id` = `todos`.`user_id`;

// without Todo.belongsTo(User);
// SELECT `User`.`id`, `User`.`username`, `todos`.`id` AS `todos.id`, `todos`.`title` AS `todos.title`, `todos`.`completed` AS `todos.completed`, `todos`.`user_id` AS `todos.userId`
//  FROM `Users` AS `User` LEFT OUTER JOIN `todos` AS `todos` ON `User`.`id` = `todos`.`user_id`;
// but EagerLoadingError [SequelizeEagerLoadingError]: User is not associated to todo!

// with Todo.belongsTo(User, { foreignKey: "userId" });  belongsTo must have foreignKey
// SELECT `User`.`id`, `User`.`username`, `todos`.`id` AS `todos.id`, `todos`.`title` AS `todos.title`, `todos`.`completed` AS `todos.completed`, `todos`.`user_id` AS `todos.userId`
// FROM `Users` AS `User` LEFT OUTER JOIN `todos` AS `todos` ON `User`.`id` = `todos`.`user_id`;
// SELECT `todo`.`id`, `todo`.`title`, `todo`.`completed`, `todo`.`user_id` AS `userId`, `User`.`id` AS `User.id`, `User`.`username` AS `User.username`
//  FROM `todos` AS `todo` LEFT OUTER JOIN `Users` AS `User` ON `todo`.`user_id` = `User`.`id`;

//specified column
Todo.findAll({
  attributes: ["title"],
  include: { model: User, attributes: ["username"] },
})
  .then((res) => console.log(JSON.stringify(res, null, 2)))
  .catch((err) => console.log(err));
