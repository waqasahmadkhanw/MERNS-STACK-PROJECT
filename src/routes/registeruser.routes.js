import { Router } from "express";
import RegisterUser from "../controllers/user/registeruser.controller.js";
import loginUser from "../controllers/user/loginuser.controller.js";
import logoutUser from "../controllers/user/logout.controller.js";
import refreshAccessToken from "../controllers/user/refreshaccesstoken.controller.js";
import updateUserDetail from "../controllers/user/updateuserdetails.controller.js";
import changePassword from "../controllers/user/changepassword.controller.js";
const router=Router()
router.route("/register").post(RegisterUser)
router.route("/loginuser").get(loginUser)
router.route("/logoutuser").get(logoutUser)
router.route("/refreshaccesstoken").post(refreshAccessToken)
router.route("/currentuser").get(currentUser)
router.route("updateuserdetails").put(updateUserDetail)
router.route("/changepassword").put(changePassword)
export default router
