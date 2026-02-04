//make async arrow function 
//find user from database
//use trycatch
//generate refresh and accesstokens seprately and store in variables
//store refreshtoken in database
//return tokens

import { User } from "../../models/user.model.js"
import Apierror from "../../utils/Apierror.js"

const generateacessandRefreshtokens=async(userid)=>{
    try {
        const user= await User.findById(userid)
        const refreshToken= await user.GenerateRefreshToken()
        const accessToken= await user.GenerateAccessToken()
        user.refreshToken=refreshToken
       await user.save({validateBeforeSave:false})
        return {refreshToken,accessToken}

    
    } catch (error) {
        throw new Apierror(500,"Something went wrong while generating tokens")
        console.log("Something went wrong while generating tokens")
    }
}
export default generateacessandRefreshtokens