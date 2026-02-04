import mongoose, { Schema } from "mongoose";
//steps to make product schema 
//name
//price 
//description
//image
const productSchema=new Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})
export const Product=mongoose.model("Product",productSchema)