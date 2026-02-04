//steps for auth middlewares
//get token from req.cookie ||req.header
//validate that token
//verify that token with jwt
//find user with decodetoken._id
//validate that response
//use trycatch
//send that user in req

import { User } from "../models/user.model.js"
import Apierror from "../utils/Apierror.js"
import jwt from "jsonwebtoken"

//use trycatch
const authmiddleware=async(req,_,next)=>{
try {
    const token = req.cookies?.Token||req.header("Authorization")?.replace("Bearer ","")
    if(!token){
        throw new Apierror(500,"token not found")
    }
    const Decodedtoken=jwt.verify(token,REFRESH_TOKEN_SECRET)
    const user=await User.findById(Decodedtoken._id)
    if(!user){
        throw new Apierror (300,"Invalid refeshtoken")
    }
    req.user=user
    next()
} catch (error) {
    throw new Apierror(501,"Invalid tokens")
}

}
export default authmiddleware