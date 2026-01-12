import {validationResult} from "express-validator";
import Product from "../models/prodcts.model.js";
import {SUCCESS, FAIL, ERROR} from '../utils/httpStatus.js'


const getAllProducts = async(req,res)=>{
 const products = await Product.find();
 res.json({status:SUCCESS, data : products});
}

const getOneProduct = async(req,res)=>{
try{
    let product = await Product.findById(req.params.id)
 if (!product){
  return  res.status(400).json({status:FAIL,message: 'this product does not exist'})
 }
 res.status(200).json({status:SUCCESS, data: product});
}catch(err){
    return res.status(400).json({status: ERROR, message :'something went wrong'});
}

}

const createProduct = async(req,res)=>{
 const errors = validationResult(req);
 if (!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
 }
 let product = new Product(req.body);
 await product.save();
 res.status(201).json({status:SUCCESS, data: product});

}

const updateProduct = async(req, res)=>{
   let updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set: {...req.body}});
   res.json({status:SUCCESS, data: updatedProduct});
}

const deleteProduct = async(req,res)=>{
    await Product.findByIdAndDelete(req.params.id);
    res.json({status:SUCCESS, data: null});
}



export {getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct}  