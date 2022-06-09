const express = require("express");
const customerRoute = require("./routes/customerRoute")
const productRoute = require("./routes/productRoute")
const orderRoute = require("./routes/orderRoute")
const departmentRoute = require("./routes/departmentRoute")
const employeeRoute = require("./routes/employeeRoute")
const supplierRoute = require("./routes/supplierRoute")

const app = express();

app.use(express.json());

app.use("/customers", customerRoute);
app.use("/products", productRoute);
app.use("/orders", orderRoute);
app.use("/departments", departmentRoute);
app.use("/employees", employeeRoute);
app.use("/suppliers", supplierRoute);

app.use((req, res) => res.status(404).json({ message: "resource not found" }));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

app.listen(8002, () => console.log("Server Running on port 8002"));
