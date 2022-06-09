const Model = require("./Model");

// Resource: log
// {
//     id (type: string, format: uuid): "uuid",
//     title (type: string, required): "PTT",
//     date (type: string, format: date, required): "2022-12-31",
//     amount (type: number, format: decimal floating point, required): "100",
//     categoryId (type: string, format: uuid): "uuid",
//     comment (type: string): ""
// }
class Log extends Model {
  constructor(title, date, amount, categoryId, comment = "") {
    super("./models/LogList.json");
    this.title = title;
    this.date = date;
    this.amount = amount;
    this.categoryId = categoryId;
    this.comment = comment;
  }
}

module.exports = Log;
