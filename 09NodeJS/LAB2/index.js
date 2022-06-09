const fs = require("fs");
const axios = require("axios");
const uuid = require("uuid");

const { readFileJSON, writeFileJSON } = require("./fileService");
const CustomError = require("./customError");

(async () => {
  let res = await readFileJSON("./test.json");
  console.log(res);
  await writeFileJSON("./test.json", [
    ...res,
    { id: res.length + 1, writeKey: "write-value-" + (res.length - 1) },
  ]);
  res = await readFileJSON("./test.json");
  console.log(res);
})();


// throw (new CustomError("Some error occured", 888))
const error = new CustomError("Some error occured", 888)
console.log(error)
