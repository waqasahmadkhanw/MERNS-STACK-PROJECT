//steps to refreshaccesstoken
//01_get refershtoken from req.cookies || req.body
//validate that token 
//verify by jwt that token
//on basis of decoded token find user
//check user and reqested token are not same throw error
//generate tokens  

import { User } from "../../models/user.model.js";
import Apierror from "../../utils/Apierror.js";
import asyncHandler from "../../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import generateacessandRefreshtokens from "./generateaccessandreffreshtokens.js";
import option from "../../utils/Options.js";
import apiResponse from "../../utils/apiResponse.js";

//send token in cookies
const refreshAccessToken=asyncHandler(async(req,res)=>{
const incomingrefreshtoken=req.cookies?.refreshToken||req.body?.refreshToken
if(!incomingrefreshtoken){
    throw new Apierror(400,"Invalid refreshtoken")
}
const decodetoken=jwt.verify(incomingrefreshtoken,process.env.REFRESH_TOKEN_SECRET)
 const user=await User.findById(decodetoken._id)
 if(!user){
    throw new Apierror(401,"Refreshtoken is expired or used")
 }
if(incomingrefreshtoken!==user?.refreshToken){
    throw new Apierror(403,"token expired ")
}
const {newrefreshToken,accessToken}=await generateacessandRefreshtokens(user?._id)
console.log("tokens",newrefreshToken,accessToken)
return res.status(200)
.cookie("refreshToken",newrefreshToken,option)
.cookie("accessToken",accessToken,option)
.json(
    new apiResponse(201,{newrefreshToken,accessToken},"User token refreshed successfully")
)
})
export default refreshAccessToken