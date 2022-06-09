const uuid = require("uuid");

// Resource: categories
// {
//   id (type: string, format: uuid): "uuid",
//   name (type: string, required): "Auto",
//   type (type: string, format: "INCOME" or "EXPENSE", required): "EXPENSE"
// }
const Category = require("../models/Category");

const idValidator = async (id) => {
  if (id === undefined)
    return { fail: true, status: 400, msg: { msg: "Category Id Required" } };
  if (!uuid.validate(id))
    return {
      fail: true,
      status: 400,
      msg: { msg: "Category Id Must Be UUID Format" },
    };

  let idx = -1;
  let categories = [];
  try {
    categories = await new Category().readFile();
    idx = categories.findIndex((item) => item.id === id);
  } catch {}

  if (idx === -1)
    return { fail: true, status: 400, msg: { msg: "Category Id Not Found" } };

  return { idx, categories, fail: false };
};

const bodyValidator = async (body) => {
  const { name, type } = body;

  if (type !== "EXPENSE" && type !== "INCOME")
    return { status: 400, msg: { msg: "Type 'EXPENSE' or 'INCOME' Required" } };
  if (name === undefined || (typeof name === "string" && name.trim === ""))
    return { status: 400, msg: { msg: "Name Required" } };

  try {
    const categories = await new Category().readFile();
    if (
      categories.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      ) !== undefined
    )
      return { status: 400, msg: { msg: "Name Duplicate" } };
  } catch {}

  return null;
};

// Create
// POST /categories
// parameter: body { name, type }
// response:
// 201 Created { category: newly created category object }
// 400 Bad Request { msg: "Name Required" }
// 500 Internal Server Error { msg: "Internal Server Error" }
const createCategory = async (req, res, next) => {
  try {
    const { name, type } = req.body;

    // if (type !== "EXPENSE" && type !== "INCOME")
    //   return res
    //     .status(400)
    //     .json({ msg: "Type 'EXPENSE' or 'INCOME' Required" });
    // if (typeof name === "string" && name.trim === "")
    //   return res.status(400).json({ msg: "Name Required" });

    // try {
    //   const categories = await new Category().readFile();
    //   if (
    //     categories.find(
    //       (item) => item.name.toLowerCase() === name.toLowerCase()
    //     ) !== undefined
    //   )
    //     return res.status(400).json({ msg: "Name Duplicate" });
    // } catch {}

    const bodyValidate = await bodyValidator(req.body);
    if (bodyValidate)
      return res.status(bodyValidate.status).json(bodyValidate.msg);

    const category = new Category(name, type);
    await category.add();

    res.status(201).json({ category });
  } catch (err) {
    next(err);
  }
};

// Read
// GET /categories
// parameter: none
// response:
// 200 Ok { categories: [ category object ] }
// 500 Internal Server Error { msg: "Internal Server Error" }
const getCategoryList = async (req, res, next) => {
  try {
    const categories = await new Category().readFile();

    res.json({ categories });
  } catch (err) {
    next(err);
  }
};

// Update
// PUT /categories/:id
// parameter: path parameter { id } body { name, type }
// response:
// 200 Ok { category: category object }
// 400 Bad Request { msg: "Name Required" }
// 500 Internal Server Error { msg: "Internal Server Error" }
const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const idValidate = await idValidator(id);
    if (idValidate.fail)
    return res.status(idValidate.status).json(idValidate.msg);
    const bodyValidate = await bodyValidator(req.body);
    if (bodyValidate)
    return res.status(bodyValidate.status).json(bodyValidate.msg);
    
    const { name, type } = req.body;
    const { idx, categories } = idValidate;
    categories[idx] = { ...categories[idx], name, type };
    await new Category().writeFile(categories);

    res.json({ category: categories[idx] });
  } catch (err) {
    next(err);
  }
};

// Delete
// DELETE /categories/:id
// parameter: path parameter { id }
// response:
// 204 No Content
// 400 Bad request { msg: "Id Not Found" }
// 500 Internal Server Error { msg: "Internal Server Error" }
const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    // if (!uuid.validate(id))
    //   return res.status(400).json({ msg: "Id Not UUID Format" });

    // let idx = -1;
    // try {
    //   const categories = await new Category().readFile();
    //   idx = categories.findIndex((item) => item.id === id);
    // } catch {}

    // if (idx === -1) return res.status(400).json({ msg: "Id Not Found" });

    const idValidate = await idValidator(id);
    if (idValidate.fail)
      return res.status(idValidate.status).json(idValidate.msg);

    const { idx, categories } = idValidate;
    categories.splice(idx, 1);
    await new Category().writeFile(categories);

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCategory,
  getCategoryList,
  updateCategory,
  deleteCategory,
  idValidator,
};
