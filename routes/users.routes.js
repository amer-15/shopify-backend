const express = require("express");
const { getAllUsers, addUser } = require("../controllers/users.controllers");
const router = express.Router();

router.get("/all", getAllUsers);
router.post("/add", addUser);

module.exports = router;