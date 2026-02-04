import mongoose, { Schema } from "mongoose";

const categorySchema=new Schema({
    name:{
        type:String,
        required:true 
    },
    description:{
        type:String,
        required:true
    }
},

{timestamps:true}

)
export const  category=mongoose.model("Category",categorySchema)