//steps for  loging user
//01_get data frmo req.body on  which basis email or username or password
//02_validate that data 
//03_find user from data base either password or username
//04_validate that user
//05_check password
//06_create tokens or generate tokens 
//remove password refreshToken
//07_send cookies and options


import { User } from "../../models/user.model.js";
import Apierror from "../../utils/Apierror.js";
import apiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import generateacessandRefreshtokens from "./generateaccessandreffreshtokens.js";

const loginUser=asyncHandler(async(req,res)=>{
const {password,name}=req.body
if(!(password,name)){
    throw new Apierror(403,"name or password is incorrect")
}
const user=await User.findOne({
    $or:[{password},{name}]
})
if(!user){
    throw new Apierror(401,"user does not have account with name or password")
}
const IsPasswordCorrect=await user.isPasswordCorrect(password)
console.log("passowrdcheck log", IsPasswordCorrect)

const {refreshToken,accessToken}= await generateacessandRefreshtokens(user._id)

const logIn=await User.findById(user._id).select("-password -refreshToken")
return res.status(200)
.cookie("refreshToken",refreshToken)
.cookie("accessToken",accessToken)
.json(
    new apiResponse(201,logIn,refreshToken,accessToken,"User login Successfully")
)
})
export default loginUser