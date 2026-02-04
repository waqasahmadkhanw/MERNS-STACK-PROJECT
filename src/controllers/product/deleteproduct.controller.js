import { Product } from "../../models/product.model.js";
import Apierror from "../../utils/Apierror.js";
import apiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const deleteProduct=asyncHandler(async(req,res)=>{
const {id}=req.params
if(!id){
    throw new Apierror(403,"Product id not found ")
}
const deleteP=await Product.findByIdAndDelete(id)
   if(!deleteP){
throw new Apierror(407,"Something went wrong while deleting product")
    }
    return res.status(200).json(
        new apiResponse(200,"Product deleted successfully")
    )
})
export default deleteProduct