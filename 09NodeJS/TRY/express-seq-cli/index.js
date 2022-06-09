const db = require("./models");
const { Customer } = require("./models");

// db.sequelize
//   .authenticate()
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log(err));

// db.sequelize.sync({ force: true });

// const run = async () => {
//   try {
//     // const customer = await db.Customer.create({name: "John"});
//     // const customer = await Customer.create({name: "John"});
//     await Customer.update({ address: "Bangkok" }, { where: { id: 1 } });
//   } catch (err) {
//     console.log(err);
//   }
// };

// run();
