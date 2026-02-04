//steps to register a user
//01_get data from req.body // get user details from frontend
//02_validate that data
//03_check if user already registered: username, email
//04_validate that user
//05_create user in data base // create user object - create entry in db
//06_remove password and refresh token field from response
//07_check for user creation

import asyncHandler from "../../utils/asyncHandler.js";
import Apierror from "../../utils/Apierror.js";
import { User } from "../../models/user.model.js";
import apiResponse from "../../utils/apiResponse.js";

//08_send proper response
const RegisterUser=asyncHandler(async(req,res)=>{
const {name,email,password}=req.body
//02_validate that data
if([name,password,email].some((field)=>field?.trim()==="")){
throw new Apierror(403,"PLease fill all fields")
}
//03_check if user already registered: username, email
const existedUser=await User.findOne({
    $or:[{email},{name}]
})
//04_validate that user
if(existedUser){
    throw new Apierror(401,"User with email or username already existed")
}
//05_create user in data base // create user object - create entry in db

const user=await User.create({
    name,
    password,
    email
})
//06_remove password and refresh token field from response
const createdUser=await User.findById(user._id).select(
    "-password -refreshToken"
)
if(!createdUser){
    throw new Apierror(403,"Something went wrong while creating user")
}
return res.status(200).json(
   new apiResponse( 201,createdUser,"User registered successfully")
)
})
export default RegisterUser
