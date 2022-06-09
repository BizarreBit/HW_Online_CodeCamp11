const Model = require("./Model");

// Resource: categories
// {
//   id (type: string, format: uuid): "uuid",
//   name (type: string, required): "Auto",
//   type (type: string, format: "INCOME" or "EXPENSE", required): "EXPENSE"
// }
class Category extends Model {
  constructor(name, type) {
    super("./models/CategoryList.json");
    this.name = name;
    this.type = type;
  }
}

module.exports = Category;
