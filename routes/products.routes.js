const express = require("express");
const {
  getAllProducts,
  addProduct,
  updateProductById,
  removeProduct,
} = require("../controllers/products.controllers");
const router = express.Router();

router.get("/all", getAllProducts);
router.post("/add", addProduct);
router.put("/update", updateProductById);
router.delete("/delete", removeProduct);

module.exports = router;
