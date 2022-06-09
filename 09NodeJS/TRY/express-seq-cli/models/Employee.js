module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      address: DataTypes.STRING,
      salary: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
    },
    { underscored: true }
  );

  Employee.associate = (models) => {
    Employee.belongsTo(models.Department, {
      foreignKey: {
        name: "departmentId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    Employee.hasMany(models.Order, {
      foreignKey: "employeeId",
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return Employee;
};
