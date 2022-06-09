const express = require("express");
const fs = require("fs");
const fsPromises = require("fs/promises");

const app = express();

//1.
app.get("/sum", (req, res) => {
  const query = req.query;

  //   const sum = Object.values(query).reduce(
  //     (sum, current) =>
  //       isNaN(+current)
  //         ? sum +
  //           JSON.parse(current).reduce((aSum, aCurrent) => aSum + +aCurrent, 0)
  //         : sum + +current,
  //     0
  //   );

  //1.1
  //   const sum = +query.a + +query.b;
  //1.2
  //   const sum = Object.values(query).reduce((acc, el) => acc + +el, 0);
  //1.3
  const sum = JSON.parse(query.arr).reduce((acc, el) => acc + +el, 0);

  res.json({ sum });
});

//2.
// app.get("/countries", (req, res) => {
//   const query = {
//     region: "",
//     nameinclude: "",
//     limit: false,
//     offset: 0,
//     ...req.query,
//   };

//   fs.readFile("./country.json", "utf-8", (err, data) => {
//     let countries = JSON.parse(data).filter(
//       (item) =>
//         item.region.toLowerCase().includes(query.region.toLowerCase()) &&
//         item.name.common
//           .concat(" ", item.name.official)
//           .toLowerCase()
//           .includes(query.nameinclude.toLowerCase())
//     );

//     res.json({
//       countries: query.limit
//         ? countries.slice(query.offset, +query.offset + +query.limit)
//         : countries.slice(query.offset),
//     });
//   });
// });

//2.1
// app.get("/countries", async (req, res) => {
//   const { region } = req.query;
//   const data = await fsPromises.readFile("./country.json", "utf-8");
//   const contries = JSON.parse(data).filter(
// //   const contries = require("./country.json").filter(
//     (item) => item.region.toLowerCase() === region.toLowerCase()
//   );
//   res.json({ contries });
// });

//2.2
// app.get("/countries", (req, res) => {
//   const { nameinclude } = req.query;
//   const contries = require("./country.json").filter((item) =>
//     // item.name.common
//     //   .concat(" ", item.name.official)
//     //   .toLowerCase()
//     //   .includes(nameinclude.toLowerCase())
//     item.name.common.toLowerCase().includes(nameinclude.toLowerCase()) ||
//     item.name.official.toLowerCase().includes(nameinclude.toLowerCase())
//   );
//   res.json({ contries });
// });

//2.3
// app.get("/countries", (req, res) => {
//   const { limit, offset } = req.query;
// //   const countries = require("./country.json").slice(+offset, +offset + +limit);
//   const countries = require("./country.json").splice(+offset, +limit);
//   res.json({ countries });
// });

//Combine
app.get("/countries", async (req, res) => {
  const { region = "", nameinclude = "", limit, offset = 0 } = req.query;
  const data = await fsPromises.readFile("./country.json", "utf-8");
  const countries = JSON.parse(data).filter(
    (item) =>
      (region === "" || item.region.toLowerCase() === region.toLowerCase()) &&
      (nameinclude === "" ||
        item.name.common.toLowerCase().includes(nameinclude.toLowerCase()) ||
        item.name.official.toLowerCase().includes(nameinclude.toLowerCase()))
  );
  res.json({
    countries: limit
      ? countries.slice(offset, +offset + +limit)
      : countries.slice(offset),
  });
});

app.listen(8888, () =>
  console.log("LAB5 Query String server listening on port 8888")
);
