const chalk = require("chalk");
const obj = require("./date");
const { months, days, milli} = require("./date");

console.log(chalk.blue("Welcome NodeJS"));
console.log(chalk.bgBlue("Hello Chalk"));

console.log(obj);
console.log(months);
console.log(days);
console.log(milli);
console.log(chalk.magenta(months))
