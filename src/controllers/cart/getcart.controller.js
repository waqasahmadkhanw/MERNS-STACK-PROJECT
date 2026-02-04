//steps how to get cat
//login user basis we get id of user req.user._id
//find that user cart
//check cart ,if cart does not exist then create new cart
//if cart exist then  check product in the cart
//if cart has product then increase     qunatity
//otherwise push items to cart

import { Cart } from "../../models/cart.model.js";
import apiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

//save cart and return cart
const cartfuntionality=asyncHandler(async(req,res)=>{
const userid=req.user._id
const { totalamount,productid}=req.body
const cart=await Cart.findById(userid)
if(!cart){
  const cartcreated=await Cart.create({
    user:userid,
totalamount,
items:[]
  })
}
const itemIndex=await Cart.items.findIndex((item)=>item.product.toString()==productid)
if(!itemIndex >-1){
cart.items.product.quantity +=quantity
}else{
    cart.items[itemIndex].push()
}
return res.status(201).json(
    new apiResponse(200,cart,"cart found success fully")
)
})
export default cartfuntionality
