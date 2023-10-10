require("dotenv").config();
const express = require("express");
const app = express();
const productRoutes = require("./routes/products.routes");
const orderRoutes = require("./routes/orders.routes");
const userRoutes = require("./routes/users.routes");
const { sequelize } = require("./models/index");

const PORT = 4000;

app.use(express.json());

// /api/all  /api/add
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

//DB sync
const startServer = async () => {
  try {
    await sequelize.sync({
      alter: true,
      // force:true, -> delete
      logging: false,
    });

    app.listen(PORT, () => console.log(`Server started at PORT : ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
