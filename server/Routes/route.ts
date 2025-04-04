import express from "express";
import { signUp } from "../Controllers/usercontroller";
//signIn, updatePassword, changeUsername, updateFriends, updateCode
const router = express.Router();

router.post("/signup", signUp);
// router.post("/signin", signIn);
// router.put("/update-password", updatePassword);
// router.put("/change-username", changeUsername);
// router.put("/update-friends", updateFriends);
// router.put("/update-code", updateCode);
// router.get("/user",user);


export default router;
