import {validationResult} from "express-validator";
import Product from "../models/prodcts.model.js";

const getAllProducts = async(req,res)=>{
 const products = await Product.find();
 res.json(products);
}

const getOnceProduct = async(req,res)=>{
 let product = await Product.findById(req.params.id)
 if (!product){
  return  res.status(400).json({error: 'this product does not exist'})
 }
 res.status(200).json(product);

}

const createProduct = async(req,res)=>{
 const errors = validationResult(req);
 if (!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
 }
 let product = new Product(req.body);
 await product.save();
 res.status(201).json(product);

}

const updateProduct = async(req, res)=>{
   let updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set: {...req.body}});
   res.json(updatedProduct);
}

const deleteProduct = async(req,res)=>{
    let deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
}



export {getAllProducts, getOnceProduct, createProduct, updateProduct, deleteProduct}  