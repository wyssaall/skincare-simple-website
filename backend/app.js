
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();




app.listen(process.env.PORT, (req,res)=>{
  console.log(`server is running on port :${process.env.PORT}}`);
})