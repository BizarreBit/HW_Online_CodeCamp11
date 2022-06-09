const express = require("express");

const app = express();

// 1.
// app.get("/", (req, res) => {
//   // res.send("<h2>My First Web App using Express</h2>");
//   res.json({ title: "My First Web App", message: "Our Web App API" });
// });

//2.
// app.get("/todos", (req, res) => {
//     res.json({message: "GET todos"})
// });
// app.post("/todos", (req, res) => {
//   res.json({ message: "POST todos" });
// });
// app.put("/todos", (req, res) => {
//   res.json({ message: "PUT todos" });
// });
// app.patch("/todos", (req, res) => {
//   res.json({ message: "PATCH todos" });
// });
// app.delete("/todos", (req, res) => {
//   res.json({ message: "DELETE todos" });
// });

//3.
// app.get("/redirect", (req, res) => {
//   res.redirect("https://google.com");
// });

//4.
// app.get("/404", (req, res) => {
//   res.status(404).send("<h1>This page is not found</h1>");
// });

//5.
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome To My Website</h1>");
// });
// app.get("/home", (req, res) => {
//   res.send("<h1>This is home page</h1>");
// });
// app.get("/*", (req, res) => {
//   res.status(404).send("<h1>Page Not Found</h1>");
// });
// // app.use((req, res) => {
// //   res.status(404).send("<h1>Page Not Found</h1>");
// // });
// // app.all("/*", (req, res) => {
// //   res.status(404).send("<h1>Page Not Found</h1>");
// // });

//6.
// // const fs = require("fs");
// const path = require("path");
// app.get("/", (req, res) => {
//   // fs.readFile("./public/index.html", "utf-8", (err,data) => {res.send(data)})
//   // res.sendFile("./index.html", { root: __dirname + "/public" });
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// });
// app.get("/home", (req, res) => {
//   // res.sendFile("./home.html", { root: __dirname + "/public" });
//   res.sendFile(path.join(__dirname, "public", "home.html"))
// });
// app.get("/404", (req, res) => {
//   // res.status(404).sendFile("./notfound.html", { root: __dirname + "/public" });
//   res.status(404).sendFile(path.join(__dirname, "public", "notfound.html"))
// });
// app.use((req, res) => {
//   res.redirect("/404");
// });

//7.
const path = require("path");
app.get("/", (req, res) => {
  // res.send(`<a href="/login">login</a><a href="/register">register</a>`);
  res.sendFile(path.join(__dirname, "public", "7home.html"));
});
app.get("/login", (req, res) => {
  // res.send(`<form method="post" action="/submit-login"><label for="input">Login</label><input type="text" id="input"/><button>Submit</button></form>`);
  res.sendFile(path.join(__dirname, "public", "login.html"));
});
app.get("/register", (req, res) => {
  res.send(
    `<form method="post" action="/submit-register"><label for="input">Register</label><input type="text" id="input"/><button>Submit</button></form>`
  );
});
app.post("/submit-login", (req, res) => {
  res.redirect("/");
});
app.post("/submit-register", (req, res) => {
  res.redirect("/");
});

app.listen(8888, () => console.log("LAB4 server listening on port 8888"));
