import mongoose from "mongoose";


const order = new mongoose.Schema ({
   products : [
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