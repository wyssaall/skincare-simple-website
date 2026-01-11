
import express from "express";
import {getAllProducts, getOnceProduct, createProduct, updateProduct, deleteProduct} from "../controllers/products.contollers.js";
const router = express.Router();

// get all products

router.get('/products', getAllProducts);

// get single product
router.get('/products/:id',getOnceProduct);

//create a product
router.post('/products', createProduct);

//update a product
router.put('/products/:id', updateProduct);

//deletes a product
router.delete('/products/:id',deleteProduct);

export default router;
