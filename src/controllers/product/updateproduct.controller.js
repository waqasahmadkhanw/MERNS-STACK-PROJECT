import { Product } from "../../models/product.model.js";
import Apierror from "../../utils/Apierror.js";
import asyncHandler from "../../utils/asyncHandler.js";

const updateProduct=asyncHandler(async(req,res)=>{
const {name,description,price}=req.body

if(!name&&!description&&!price){
    throw new Apierror(405,"All fields are required")
}
const {id}=req.params
if(!id){
    throw new Apierror(405,"product id is reqiured")
}
const product=await Product.findByIdAndUpdate(id,
    {
        $set:{
            name,description,price
        }
    },{
        new:true
    }
)
if(!product){
    throw new Apierror(403,"Product not found")
}

return res.status(201).json(
    new apiResponse(200,product,"Product updated successfully")
)
})
export default updateProduct