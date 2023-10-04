const fs = require("fs");

exports.getAllProducts = async (req, res) => {
  fs.readFile("products.json", (err, data) => {
    if (err) throw err;
    let products = JSON.parse(data);
    return res.json({
      message: "successfully fetched products",
      products,
    });
  });
};

exports.addProduct = async (req, res) => {
  const { title, price } = req.body;

  const newProduct = {
    id: Math.round(Math.random() * 10),
    title,
    price,
  };

  fs.readFile("products.json", (err, data) => {
    if (err) throw err;
    let products = JSON.parse(data);
    const existingProducts = [...products];
    existingProducts.push(newProduct);
    let productsData = JSON.stringify(existingProducts);
    fs.writeFileSync("products.json", productsData);
    return res.status(201).json({
      message: "product added!",
      products: existingProducts,
    });
  });
};

exports.updateProductById = async (req, res) => {
  const { productId } = req.query;
  const { title, price } = req.body;

  fs.readFile("products.json", (err, data) => {
    if (err) throw err;
    let products = JSON.parse(data);
    const existingProducts = [...products];
    const productIndex = existingProducts.findIndex(
      (prod) => prod.id === +productId
    );
    if (productIndex != -1) {
      existingProducts[productIndex].title = title;
      existingProducts[productIndex].price = price;
    }
    let productsData = JSON.stringify(existingProducts);
    fs.writeFileSync("products.json", productsData);
    return res.status(201).json({
      message: "product updated!",
      products: existingProducts,
    });
  });
};

exports.removeProduct = async (req, res) => {
  const { productId } = req.query;

  fs.readFile("products.json", (err, data) => {
    if (err) throw err;
    let products = JSON.parse(data);
    const existingProducts = [...products];
    const filteredProducts = existingProducts.filter(
      (prod) => prod.id !== +productId
    );
    let productsData = JSON.stringify(filteredProducts);
    fs.writeFileSync("products.json", productsData);
    return res.status(201).json({
      message: "product deleted!",
      products: filteredProducts,
    });
  });
};
