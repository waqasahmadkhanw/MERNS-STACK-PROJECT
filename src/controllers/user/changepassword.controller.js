import { User } from "../../models/user.model.js";
import Apierror from "../../utils/Apierror.js";
import apiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const changePassword=asyncHandler(async(req,res)=>{
const {oldPassword,newPasword}=req.body
if(!oldPassword&&!newPasword){
    throw new Apierror(402,"All fields are required")
}
const user=await User.findById(req.user?._id)
const checkPassword=user.isPasswordCorrect(oldPassword)
user.password=newPasword
await user.save({validateBeforeSave:false})
return res.status(201).json(
    new apiResponse(200,{},"Password changed successfully!")
)

})
export default changePassword