const db = require("../models/index");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.users.findAll({
      include: {
        model: db.orders,
      },
    });
    return res.json({
      message: "fetched users",
      users,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};

exports.addUser = async (req, res) => {
  try {
    await db.users.create(req.body);
    return res.status(201).json({
      message: "user added!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};
