//steps to read product 
//get aall products by find method 
//find by id get single product

import { Product } from "../../models/product.model.js";
import Apierror from "../../utils/Apierror.js";
import apiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

//send proper response
const readProduct=asyncHandler(async(req,res)=>{
    const {id}=req.params
    if(!id){
        throw new Apierror(403,"Product id not found")
    }
    const singleProduct=await Product.findById(id)
    if(!singleProduct){
  throw new Apierror(403,"Product not found")
    }

return res.status(200).json(
    new apiResponse(200,singleProduct,"single Product created successfully")
)
})
const readsingleProduct=asyncHandler(async(_,res)=>{
    const product=await Product.find()
if(!product){
    throw new Apierror(402,"Some problem in getting products")
}
return res.status(200).json(
    new apiResponse(200,product,"Products are created successfully")
)
})
export  {readProduct,readsingleProduct}