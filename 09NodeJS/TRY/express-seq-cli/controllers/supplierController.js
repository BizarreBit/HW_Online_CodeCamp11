const { Supplier } = require("../models");

const getAllSupplier = async (req, res, next) => {
  try {
    const suppliers = await Supplier.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json({ suppliers });
  } catch (err) {
    next(err);
  }
};

const getSupplierById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const supplier = await Supplier.findOne({
      where: { id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.json({ supplier });
  } catch (err) {
    next(err);
  }
};

const createSupplier = async (req, res, next) => {
  try {
    const { name, address, phoneNumber } = req.body;

    const supplier = await Supplier.create({ name, address, phoneNumber });

    res
      .status(201)
      .json({
        supplier: {
          id: supplier.id,
          name: supplier.name,
          phoneNumber: supplier.phoneNumber,
        },
      });
  } catch (err) {
    next(err);
  }
};

const updateSupplier = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address, phoneNumber } = req.body;

    const [status] = await Supplier.update(
      { name, address, phoneNumber },
      { where: { id } }
    );

    if (!status) return res.status(400).json({ message: "'id' not found" });

    await getSupplierById(req, res, next);
  } catch (err) {
    next(err);
  }
};

const deleteSupplier = async (req, res, next) => {
  try {
    const { id } = req.params;

    const status = await Supplier.destroy({ where: { id } });

    if (!status) return res.status(400).json({ message: "'id' not found" });

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllSupplier,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};