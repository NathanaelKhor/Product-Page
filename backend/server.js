const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

const productRoutes = require("./routes/productRouter");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, async () => {
  await connectDB();
  console.log("Server started at http://localhost:8080");
});
