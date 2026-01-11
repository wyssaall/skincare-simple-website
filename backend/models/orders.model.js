import mongoose from "mongoose";
import Product from "./prodcts.model";


const order = new mongoose.Schema ({
   Product : [
    {
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
            unique: true,
        },
        quantity:{
            type: Number,
            required: true,
        }
    }
   ],
    totalPrice: {
    type: Number,
    required: true
  },
    

},{ timestamps: true })
    

const Order = mongoose.model('Order', order);

export default Order;