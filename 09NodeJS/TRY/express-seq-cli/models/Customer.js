module.exports = (sequelize, DataType) => {
  const Customer = sequelize.define(
    "Customer",
    {
      name: {
        type: DataType.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      address: DataType.STRING,
      phoneNumber: DataType.STRING,
    },
    {
      //   tableName: "cus",
      //   timestamps: false,
      underscored: true,
    }
  );

  Customer.associate = (models) => {
    Customer.hasMany(models.Order, {
      foreignKey: {
        name: "customerId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return Customer;
};
