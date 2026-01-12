
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import routerProd from "./routes/products.routes.js"
import routerOrder from "./routes/orders.routes.js"
import { ERROR } from "./utils/httpStatus.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/products', routerProd);
app.use('/api/orders', routerOrder);

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "This resource is not available"
  });
});


connectDB();




app.listen(process.env.PORT, ()=>{
  console.log(`server is running on port :${process.env.PORT}}`);
})