//steps to write product controller
//get data from req.body
//validate that data 
//check if product al ready db
//create data entry in db

import { Product } from "../../models/product.model.js";
import Apierror from "../../utils/Apierror.js";
import asyncHandler from "../../utils/asyncHandler.js";

//send proper response
const productCreation=asyncHandler(async(req,res)=>{
const {name,price,description}=req.body
if(
[name,price,description].some((p)=>p.trim()=="")
){
    throw new Apierror(401,"All fields are required")
}
const existedproduct=await Product.findOne(name)
if(existedproduct){
    throw new Apierror(401,"Product with this name already in db.")
}
const createProduct=await Product.create({
    name,price,description
})
if(!createProduct){
    throw new Apierror(403,"There is problem in product creation")
}
return res.status(200,createProduct,"Product is created successfully!!")
})
export default productCreation