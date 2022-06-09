const fsPromises = require("fs/promises");

async function readFileJSON(fileName) {
  try {
    const data = await fsPromises.readFile(fileName, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
}

const writeFileJSON = (fileName, data) =>
  fsPromises
    .writeFile(fileName, JSON.stringify(data), "utf-8")
    .catch((err) => console.log(err));

// module.exports = { readFileJSON, writeFileJSON };

exports.readFileJSON = readFileJSON;
exports.writeFileJSON = writeFileJSON;
