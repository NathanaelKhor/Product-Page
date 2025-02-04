const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

const productRoutes = require("./routes/productRouter");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(8080, async () => {
  await connectDB();
  console.log("Server started at http://localhost:8080");
});
