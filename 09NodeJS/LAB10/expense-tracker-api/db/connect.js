const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "expense_tracker"
})

module.exports = pool;