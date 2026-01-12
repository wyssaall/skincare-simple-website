
import express from "express";
import {getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct} from "../controllers/products.contollers.js";
const routerProd = express.Router();

// get all products

routerProd.get('/', getAllProducts);

// get single product
routerProd.get('/:id',getOneProduct);

//create a product
routerProd.post('/', createProduct);

//update a product
routerProd.put('/:id', updateProduct);

//deletes a product
routerProd.delete('/:id',deleteProduct);

export default routerProd;
