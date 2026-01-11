
import express from "express";
import { createOrder, getAllOrders, getOneOrder } from "../controllers/orders.controllers.js";
const routerOrder = express.Router();

// get all products

routerOrder.get('/',getAllOrders );

// get single product
routerOrder.get('/:id', getOneOrder);

//create a product
routerOrder.post('/', createOrder);


export default routerOrder;
