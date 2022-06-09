const { Customer } = require("../models");

const getAllCustomer = async (req, res, next) => {
  try {
    const customers = await Customer.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json({ customers });
  } catch (err) {
    next(err);
  }
};

const getCustomerById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const customer = await Customer.findOne({
      where: { id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.json({ customer });
  } catch (err) {
    next(err);
  }
};

const createCustomer = async (req, res, next) => {
  try {
    const { name, address, phoneNumber } = req.body;

    const customer = await Customer.create({ name, address, phoneNumber });

    res.status(201).json({
      customer: {
        id: customer.id,
        name: customer.name,
        address: customer.address,
        phoneNumber: customer.phoneNumber,
      },
    });
  } catch (err) {
    next(err);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address, phoneNumber } = req.body;

    const [status] = await Customer.update(
      { name, address, phoneNumber },
      { where: { id } }
    );

    if (!status) return res.status(400).json({ message: "'id' not found" });

    await getCustomerById(req, res, next);
  } catch (err) {
    next(err);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;

    const status = await Customer.destroy({ where: { id } });

    if (!status) return res.status(400).json({ message: "'id' not found" });

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCustomer,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
