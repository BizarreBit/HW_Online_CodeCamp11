// const { Product, sequelize } = require("../models");
const { Product, Supplier } = require("../models");

const getAllProduct = async (req, res, next) => {
  try {
    // Raw Query
    // const [result] = await sequelize.query(`SELECT * FROM products`);
    // const [result] = await sequelize.query(
    //   `SELECT p.id, p.name, p.description, p.quantity, s.id AS supplier_id, s.name AS supplier_name FROM products p JOIN suppliers s ON p.supplier_id = s.id`
    // );
    // res.json({ result });
    const products = await Product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Supplier,
        attributes: ["name"],
        // attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    });
    res.json({ products });
  } catch (err) {
    next(err);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({
      where: { id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Supplier,
        attributes: ["name"],
      },
    });

    res.json({ product });
  } catch (err) {
    next(err);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { name, price, description, quantity, supplierId } = req.body;
    const product = await Product.create({
      name,
      price,
      description,
      quantity,
      supplierId,
    });
    const returnProduct = await Product.findOne({
      where: { id: product.id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Supplier,
        attributes: ["name"],
      },
    });
    res.status(201).json({ returnProduct });
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, description, quantity, supplierId } = req.body;

    const [status] = await Product.update(
      { name, price, description, quantity, supplierId },
      { where: { id } }
    );

    if (!status) return res.status(400).json({ message: "'id' not found" });
    
    await getProductById(req, res, next);
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const status = await Product.destroy({ where: { id } });

    if (!status) return res.status(400).json({ message: "'id' not found" });

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};