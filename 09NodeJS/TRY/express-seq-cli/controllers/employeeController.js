const { Employee, Department } = require("../models");

const getAllEmployee = async (req, res, next) => {
  try {
    const employees = await Employee.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Department,
        attributes: ["name"],
      },
    });
    res.json({ employees });
  } catch (err) {
    next(err);
  }
};

const getEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findOne({
      where: { id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Department,
        attributes: ["name"],
      },
    });

    res.json({ employee });
  } catch (err) {
    next(err);
  }
};

const createEmployee = async (req, res, next) => {
  try {
    const { name, address, salary, departmentId } = req.body;

    const employee = await Employee.create({
      name,
      address,
      salary,
      departmentId,
    });

    const returnEmployee = await Employee.findOne({
      where: { id: employee.id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Department,
        attributes: ["name"],
      },
    });

    res.status(201).json({
      employee: returnEmployee,
    });
  } catch (err) {
    next(err);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address, salary, departmentId } = req.body;

    const [status] = await Employee.update(
      { name, address, salary, departmentId },
      { where: { id } }
    );

    if (!status) return res.status(400).json({ message: "'id' not found" });

    await getEmployeeById(req, res, next);
  } catch (err) {
    next(err);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    const status = await Employee.destroy({ where: { id } });

    if (!status) return res.status(400).json({ message: "'id' not found" });

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllEmployee,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};