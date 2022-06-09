module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    "Department",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      budget: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
    },
    { underscored: true }
  );

  Department.associate = (models) => {
    Department.hasMany(models.Employee, {
      foreignKey: {
        name: "departmentId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      OnUpdate: "RESTRICT",
    });
  };

  return Department;
};
