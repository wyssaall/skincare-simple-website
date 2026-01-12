import {validationResult} from "express-validator";
import Order from "../models/orders.model.js";
import {SUCCESS, FAIL, ERROR} from '../utils/httpStatus.js'

const getAllOrders = async(req,res)=>{
 const orders = await Order.find();
 res.json({status:SUCCESS, data : orders});
}


const getOneOrder= async(req,res)=>{
 let order = await Order.findById(req.params.id)
 if (!order){
  return  res.status(400).json({error: 'this order does not exist'})
 }
 res.status(200).json({status:SUCCESS, data: order});

}

const createOrder = async(req,res)=>{
 const errors = validationResult(req);
 if (!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
 }
 let order = new Order(req.body);
 await order.save();
 res.status(201).json({status:SUCCESS, data: order});

}

export{getAllOrders,getOneOrder,createOrder }