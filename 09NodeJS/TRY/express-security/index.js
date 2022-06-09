// const bcrypt = require("bcryptjs");

// const message = "123456";

// const run = async () => {
//   const hashed = await bcrypt.hash(message, 10);
//   console.log(hashed);
// };

// const test = async () => {
//   const isMatch = await bcrypt.compare(
//     message,
//     "$2a$11$joTUGqJ6x2aqEP2MPDnG/Ocdwj6RAftnQD7laNJsJkQRuNZl9eJSK"
//   );
//   console.log(isMatch);
// };

// // run();
// test();

/*
> npm i express mysql2 sequelize
> sequelize init:config
edit config.json
*> sequelize --help
*> sequelize db:drop
> sequelize db:create
> sequelize init:models
code models
code express server
code controller frame
code router
code controller logics
 */

// const { sequelize } = require("./models");

// sequelize.sync({ force: true });

// Migration & Seed concept
/*
> sequelize db:drop
> sequelize init:migrations
> sequelize migration:generate --name create-user
edit migrations\20220607134231-create-user.js
> sequelize db:create
> sequelize db:migrate

> sequelize seed:generate --name user
edit seeders\20220607140134-user.js
> sequelize db:seed:all

> sequelize migration:generate --name create-todo
edit migrations\20220607141933-create-todo.js
> sequelize db:migrate
*> sequelize db:migrate:undo
 */

//JWT Json Web Token
/*
> npm i jsonwebtoken
 */

const jwt = require("jsonwebtoken");

const payload = {
  message: "Hello, my friend.",
};

const secretKey = "codecamp";

const token = jwt.sign(payload, secretKey, {
  expiresIn: 60,
});
console.log(token);

const tokenToVerify =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiSGVsbG8sIG15IGZyaWVuZC4iLCJpYXQiOjE2NTQ2NjMwNDMsImV4cCI6MTY1NDY2MzEwM30.RG15uIgVA3Msld4Qo7Es3EQzKvFEPd0xSEc93fBoL1Y";

try {
  const decoded = jwt.verify(tokenToVerify, "codecamp");
  console.log(decoded);
} catch (err) {
  console.log(err);
}

/*
add created_at updated_at to migration ans seed files
> sequelize db:migration:undo:all
> sequelize db:migration
> sequelize db:seed:all
*/
// Security LAB 1

// todos
// authenticate
// secret key  NodeJS process object  Environment Variable   .env  // don't push to github
/*
> npm i dotenv
*/

// basic-todo-list   Branch: advance-hook
// > npm i react-router-dom
//axios.defaults.baseURL
// > npm i cors
//localStorage

// > npm i jwt-decode