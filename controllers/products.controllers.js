const db = require("../models/index");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await db.products.findAll();
    return res.json({
      message: "fetched products",
      products,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    await db.products.create(req.body);
    return res.status(201).json({
      message: "product added!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};

exports.updateProductById = async (req, res) => {
  try {
    const { productId } = req.query;
    await db.products.update(req.body, { where: { id: productId } });
    return res.json({
      message: "product updated!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const { productId } = req.query;
    await db.products.destroy({ where: { id: productId } });
    // const { id } = req.query;
    // await db.products.destroy(id);
    return res.json({
      message: "product deleted!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "something went wrong",
    });
  }
};
