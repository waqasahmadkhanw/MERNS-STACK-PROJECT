import apiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const currentUser=asyncHandler(async(req,res)=>{
return res.status(201).json(
    new apiResponse(200,req.user,"Current User get successfully")
)
})
export default currentUser