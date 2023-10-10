const db = require("../models/index");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await db.orders.findAll({
      include: {
        model: db.users,
        attributes: {
          exclude: ["password", "updatedAt"],
        },
      },
    });
    return res.json({
      message: "fetched orders",
      orders,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};

exports.addOrder = async (req, res) => {
  try {
    await db.orders.create(req.body);
    return res.status(201).json({
      message: "order added!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};
