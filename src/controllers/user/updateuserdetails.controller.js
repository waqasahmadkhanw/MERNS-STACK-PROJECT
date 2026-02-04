import { User } from "../../models/user.model";
import Apierror from "../../utils/Apierror.js";
import apiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const updateUserDetail=asyncHandler(async(req,res)=>{
const {name,email}=req.body
if(!name||!email){
    throw new Apierror(403,"All fields are required")
}
const updatedUser=await User.findOneAndUpdate(req.user?._id,
    {
       $set:{
         name,
        email
       }
    },
    {new:true}
)
return res.status(201).json(
    new apiResponse(200,updatedUser,"User details are updated successfully!!")
)
})
export default updateUserDetail