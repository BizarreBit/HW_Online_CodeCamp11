const {
  Order,
  OrderItem,
  Product,
  Customer,
  Employee,
  sequelize,
} = require("../models");

const getAllOrder = async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Customer,
          attributes: ["name"],
        },
        {
          model: Employee,
          attributes: ["name"],
        },
        {
          model: OrderItem,
          attributes: ["price", "amount", "discount", "productId"],
          include: {
            model: Product,
            attributes: ["name"],
          },
        },
      ],
    });
    res.json({ orders });
  } catch (err) {
    next(err);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const order = await Order.findOne({
      where: { id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Customer,
          attributes: ["name"],
        },
        {
          model: Employee,
          attributes: ["name"],
        },
        {
          model: OrderItem,
          attributes: ["price", "amount", "discount", "productId"],
          include: {
            model: Product,
            attributes: ["name"],
          },
        },
      ],
    });

    res.json({ order });
  } catch (err) {
    next(err);
  }
};

const createOrder = async (req, res, next) => {
  const transaction = await sequelize.transaction();

  try {
    const { date, customerId, employeeId, orderItem } = req.body;

    if (typeof orderItem !== "object")
      res.status(400).json({ message: "'orderItem' array is required" });

    const order = await Order.create(
      { date, customerId, employeeId },
      { transaction: transaction }
    );
    // the line above was execute
    // but the lines below might fail to execute which cause invalid data set
    //To solve this problem, we must use "Transactions" to rollback
    // const newOrderItems = orderItem.map((item) => ({
    //   ...item,
    //   orderId: order.id,
    // }));
    // const newOrderItems = await (async () =>
    //   Promise.all(
    //     orderItem.map(async (item) => ({
    //       ...item,
    //       price:
    //         item.price ||
    //         (
    //           await Product.findOne({ where: { id: item.productId } })
    //         ).price,
    //       orderId: order.id,
    //     }))
    //   ))();
    const newOrderItems = await orderItem.reduce(
      async (prev, item) => [
        ...(await prev),
        {
          ...item,
          price:
            item.price ||
            (
              await Product.findOne({ where: { id: item.productId } })
            ).price,
          orderId: order.id,
        },
      ],
      []
    );

    await OrderItem.bulkCreate(newOrderItems, { transaction });
    await transaction.commit();

    const returnOrder = await Order.findOne({
      where: { id: order.id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: Customer,
          attributes: ["name"],
        },
        {
          model: Employee,
          attributes: ["name"],
        },
        {
          model: OrderItem,
          attributes: ["price", "amount", "discount", "productId"],
          include: {
            model: Product,
            attributes: ["name"],
          },
        },
      ],
    });

    res.status(201).json({ order: returnOrder });

    // order.orderItem = await orderItem.reduce(async (prev, el) => {
    // //   if (!el.price) {
    // //     const { price } = await Product.findOne({
    // //       where: { id: el.productId },
    // //     });
    // //   }

    //   const result = await OrderItem.create({
    //     orderId: order.id,
    //     productId: el.productId,
    //     amount: el.amount,
    //     price:
    //       el.price ||
    //       (
    //         await Product.findOne({
    //           where: { id: el.productId },
    //         })
    //       ).price,
    //     discount: el.discount,
    //   });

    //   return [
    //     ...(await prev),
    //     {
    //       id: result.id,
    //       productId: result.productId,
    //       amount: result.amount,
    //       price: result.price,
    //       discount: result.discount,
    //     },
    //   ];
    // }, []);

    // res.status(201).json({
    //   order: {
    //     id: order.id,
    //     date: order.date,
    //     customerId: order.customerId,
    //     employeeId: order.employeeId,
    //     orderItem: order.orderItem,
    //   },
    // });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { date, customerId, employeeId, orderItem } = req.body;

    const [status] = await Order.update(
      { date, customerId, employeeId, orderItem },
      { where: { id } }
    );

    if (!status) return res.status(400).json({ message: "'id' not found" });

    await getOrderById(req, res, next);
  } catch (err) {
    next(err);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;

    const status = await OrderItem.destroy({ where: { orderId: id } });
    if (!status)
      return res.status(400).json({ message: "'id' not found" });

    await Order.destroy({ where: { id } });

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllOrder,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
