import mongoose from "mongoose";


const product = [
    {
        name : String,
        description : String,
        price : Number,
        skinType: {
            type: String,
            enum: ["dry", "oily", "sensitive", "normal", "combination"]
        },   
        keyIngredient: String,
         stock: {
            type: Number,
            default: 0
        }
    }
]

const Product = mongoose.model('Product', product);

export default Product;