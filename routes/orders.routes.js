const express = require("express");
const { getAllOrders, addOrder } = require("../controllers/oders.controllers");
const router = express.Router();

router.get("/all", getAllOrders);
router.post("/add", addOrder);

module.exports = router;
