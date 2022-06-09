const mysql = require("mysql2/promise");

// const conPromise = mysql.createConnection({
//   host: "localhost",
//   user: "root", // mysql username
//   password: "123456789", // mysql password
//   database: "cc10_todo_list", // database name
// });

// conPromise
//   .then((con) => {
//     console.log("Connect Successfully");
//     // return con.query(`CREATE TABLE users (
//     //     id INT AUTO_INCREMENT,
//     //     username VARCHAR(255) NOT NULL,
//     //     PRIMARY KEY (id)
//     // );`);
//     // return con.query(`INSERT INTO users (username) VALUE ("John"),("Albert"),("Michael")`);
//     // return con.query(`UPDATE users SET username = "Richard" WHERE id = 3`);
//     // return con.query(`DELETE FROM users WHERE id = 3`);
//     return con.query(`SELECT * FROM users`);
//     // return con.query(`SELECT id AS userId FROM users WHERE id = 2000`);
//   })
//   .then((result) => {
//     // SELECT result : [rows, fields]
//     // INSERT result : [ResultSetHeader, undefined] affectedRow, insertId, changedRows(UPDATE only)
//     // console.log(result);
//     // console.log(result[0]);
//     console.log(result[1]);
//   })
//   .catch((err) => console.log(err.message));

// Pool

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "cc10_todo_list",
  // connectionLimit: 10 // default: 10
});

// pool
//   .then((pool) => console.log("Pool Connected"))
//   .catch((err) => console.log(err.message));
// pool doesn't return Promise

pool.query(`SELECT * FROM users`).then((result) => {
  console.log(result);
});

