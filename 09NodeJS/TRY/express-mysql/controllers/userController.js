const pool = require("../db/connect");

// exports.createUserSQLinjection = async (req, res, next) => {
//   try {
//     const { userName } = req.body;
//     const result = await pool.query(
//       `INSERT INTO users (username) VALUE ("${userName}");`
//     );
//     res.status(201).json({
//       message: "User Created",
//       user: { id: result[0].insertId, userName },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

exports.createUser = async (req, res, next) => {
  try {
    // const { userName, id } = req.body;
    //   const result = await pool.query(
    //     `INSERT INTO users (username) VALUE ("${userName}");`
    //   );
    //   query = `SELECT * FROM users WHERE id = ${id}`  // id = 1 AND DROP TABLE users
    //   // query = "SELECT * FROM users WHERE id = 1 AND DROP TABLE users"
    const { userName } = req.body;
    const result = await pool.execute(
      "INSERT INTO users (username) VALUE (?)",
      [userName]
      //   "INSERT INTO users (username, password) VALUE (?, ?)",
      //   [userName, "1234"]
    );
    res.status(201).json({
      message: "User Created",
      user: { id: result[0].insertId, userName },
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllUser = async (req, res, next) => {
  // SELECT * FROM users;
  try {
    // const result = pool.execute("SELECT * FROM users");
    // res.json({ users: result[0] });
    const [users] = await pool.execute(
      `SELECT u.id AS userId, u.username, t.id AS todoId, 
      t.title, t.completed FROM users u LEFT JOIN todos t 
      ON u.id = t.user_id`
    );
    const result = users.reduce((acc, item) => {
      if (acc[item.userId]) {
        // acc[item.userId].todos.push({
        //   id: item.todoId,
        //   title: item.title,
        //   completed: item.completed,
        // });
        acc[item.userId].todos = [
          ...acc[item.userId].todos,
          { id: item.todoId, title: item.title, completed: item.completed },
        ];
      } else {
        acc[item.userId] = {
          id: item.userId,
          username: item.username,
          //   todos: []
          todos: item.todoId
            ? [
                {
                  id: item.todoId,
                  title: item.title,
                  completed: item.completed,
                },
              ]
            : [],
        };
        // item.todoId &&
        //   (acc[item.userId].todos = [
        //     {
        //       id: item.todoId,
        //       title: item.title,
        //       completed: item.completed,
        //     },
        //   ]);
      }
      return acc;
    }, {});
    /*
    [
      {
        id: userId,
        username: "John",
        todos: [
          { id: 1, title: "test1", completed: false },
          { id: 3, title: "test2", completed: true },
        ],
      },
    ];
*/
    res.json({ users: Object.values(result) });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    // const [[user]] = await pool.execute("SELECT * FROM users WHERE id = ?", [
    //   req.params.id,
    // ]);
    // res.json({ user });
    const { id } = req.params;
    const [users] = await pool.execute("SELECT * FROM users WHERE id = ?", [
      id,
    ]);
    res.json({ user: users[0] || null });
  } catch (err) {
    next(err);
  }
};
