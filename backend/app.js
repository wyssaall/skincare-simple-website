
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/products.routes.js"

dotenv.config();
const app = express();
app.use(express.json());

app.use('/', router);
connectDB();




app.listen(process.env.PORT, ()=>{
  console.log(`server is running on port :${process.env.PORT}}`);
})