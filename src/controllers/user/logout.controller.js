//steps for logout a user
//01_login user find//we get login user with auth middleware
//01_make rerfreshtoken undefined
//01_clear cookies 

import { User } from "../../models/user.model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import option from "../../utils/Options.js";

//01_return proper response
const logoutUser=asyncHandler(async(req,res)=>{
const user=await User.findOneAndUpdate(req.user?._id,
    {
        $unset:{
            refreshToken:1
        }
    },{
            new:true
        }
        
)
console.log("logout user details",user)

})
return res.status(200)
.clearCookie("refreshToken",refreshToken,option)
.clearCookie("accessToken",accessToken,option)
.json(
    new apiResponse(201,{},"User logout successfully")
)
export default logoutUser