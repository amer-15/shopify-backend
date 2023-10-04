const express = require('express');
const app = express();
const productRoutes = require("./routes/products.routes");


const PORT = 4000;

app.use(express.json());

// /api/all  /api/add
app.use("/api/products", productRoutes);



app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
