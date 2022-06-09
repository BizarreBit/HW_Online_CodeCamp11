const express = require("express");

const app = express();

// app.use((req, res) => {
//   console.log("Incoming Request");
//   res.send("Response from express server")
// });

// app.get("/abc", (req, res) => {
//   console.log(req.method);
//   console.log(req.headers["content-type"]);
//   console.log(req.headers["user-agent"]);
//   console.log(req.query); //?name=john&age=20&birth=2000-11-19
//   // res.send("Response from method GET via path /abc");
//   // res.json({ message: "JSON response", status: true });
//   res.redirect("http://google.co.th");
// });

// app.delete("/def", (req, res) => {
//   res.status(400).send("Response from method DELETE via path /def");
// });

//Query String   ?order=name
// app.get("/", (req, res) => {
//   const query = req.query;
//   console.log(query.order);
// });

//Path parameter   /product/1234
// app.get("/product/:productId/:shopId", (req, res) => {
//   const params = req.params
//   console.log(params);
// });

//Body
// app.use(express.urlencoded({ extended: false })); //number as string

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/home.html");
// });

// app.get("/login", (req, res) => {
//   res.sendFile(__dirname + "/login.html");
//   // type: text
//   // Content-Type: application/x-www-form-urlencoded
//   // type: file
//   // enctype="multipart/form-data"
//   // type: json
//   // application/json
// });

// app.post("/submit-login", (req, res) => {
//   const body = req.body;
//   console.log(body); // undefined  need middleware
//   // res.redirect("/");
// });

// app.use(express.json()); //number as digit
// app.post("/login", (req, res) => {
//   console.log(req.body);  //
// });

// //req (Middleware function ...) res
// app.use((req, res) => {
//   console.log("Curious");
// });

// app.use(express.json());

// app.get("/", (req, res, next) => {
//   console.log("Routing Middleware");
//   res.send("Tesss");
//   next();   //!!! not both, use condition
// });

// app.use((req, res, next) => {
//   // req.abc = "test";
//   // req.query.def = "testTest";
//   // console.log(req.query);
//   console.log("First Middleware");
//   // res.json([{test: "Tesssttttttttttt"}] ); //error
//   next();
// });
// app.use((req, res, next) => {
//   // console.log(req.query);
//   // console.log(req.abc);
//   // console.log(req.ghi);
//   console.log("Second Middleware");
//   next();
// });
// app.use((req, res, next) => {
//   // req.ghi = "testTestTest";
//   // console.log(req.ghi);
//   console.log("Third Middleware");
// });

// // Router Level Middleware
// app.get("/todos", (req, res, next) => {})
// app.post("/todos", (req, res, next) => {})
// app.put("/todos", (req, res, next) => {})
// app.listen("/todos", (req, res, next) => {})

// const router = express.Router();
// router.get("/", (req, res, next) => {}); // GET /some/todos
// router.post("/", (req, res, next) => {}); // POST /some/todos
// router.put("/:id", (req, res, next) => {}); // PUT /some/todos/:id
// router.delete("/:id", (req, res, next) => {}); // DELETE /some/todos/:id

// app.use("/some/todos", router);

// //Error-handling Middlewere
// app.use((req, res, next) => {
//   console.log("Normal Middleware 1");
//   throw new Error("Internal throw Error");
//   next();
//   // next(new Error("next() throw Error"));
// });
// app.use((req, res, next) => {
//   console.log("Normal Middleware 2");
//   next();
// });
// app.use((err, req, res, next) => {
//   console.log("Error-handling Middleware");
//   res.status(500).json({ message: err.message });
// });
// app.use((req, res, next) => {
//   console.log("Normal Middleware 3");
// });

// //Static File
app.use("/static", express.static("public"));

//LAB7.2 todoList api server

//  // MVC model view controller

// monolith {DB, Web server : {apache,NginX}, Application server: {nodejs, express}} response : text/html
// Model <=> Controller <=> View template engine

// micro-service : {APIs <=> react} response: json
// API(Model <=> Controller) <=> React(View)

//LAB7.2 todoList api server with MVC and class model

//expense tracker api server
// CRUD
// transaction
// {
//     id,
//     payee,
//     date,
//     amount,
//     categoryId: "12345",
//     comment
// }
// CRUD get Category by type
// category
// {
//     id: 12345,
//     type,
//     name
// }

app.listen(8000, () => console.log("Server runing on port 8000"));
