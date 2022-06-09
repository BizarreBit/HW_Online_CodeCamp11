const { Department } = require("../models");

const getAllDepartment = async (req, res, next) => {
  try {
    const departments = await Department.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json({ departments });
  } catch (err) {
    next(err);
  }
};

const getDepartmentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const department = await Department.findOne({
      where: { id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.json({ department });
  } catch (err) {
    next(err);
  }
};

const createDepartment = async (req, res, next) => {
  try {
    const { name, budget } = req.body;

    const department = await Department.create({ name, budget });

    res
      .status(201)
      .json({
        department: {
          id: department.id,
          name: department.name,
          budget: department.budget,
        },
      });
  } catch (err) {
    next(err);
  }
};

const updateDepartment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, budget } = req.body;

    const [status] = await Department.update(
      { name, budget },
      { where: { id } }
    );

    if (!status) return res.status(400).json({ message: "'id' not found" });

    await getDepartmentById(req, res, next);
  } catch (err) {
    next(err);
  }
};

const deleteDepartment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const status = await Department.destroy({ where: { id } });

    if (!status) return res.status(400).json({ message: "'id' not found" });

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllDepartment,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};