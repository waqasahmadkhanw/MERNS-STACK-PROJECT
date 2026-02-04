import mongoose, { Schema } from "mongoose";
//steps 
//here we will write user schema refrence
//here we will write product schema refrence
//qunatity
//total amount
const cartSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    items:[{
   product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    qunatity:{
        type:Number
    }
    }],
    totalamount:{
        type:Number,
        default:0
    }
},
{
    timestamps:true
}
)
export const Cart=mongoose.model("Cart",cartSchema)