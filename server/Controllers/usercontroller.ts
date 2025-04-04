import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";
import {connectDB} from "../utils/db"
connectDB().then(()=>{console.log("dbconnected")});
export const signUp = async (req: Request, res: Response): Promise<void> => {  // ✅ Fix return type
    try {
        console.log("Trying to signup user");
        // console.log("Request Body:", req.body);
        
        const data = req.body;

        // Check if user already exists
        const user = await User.User.findOne({ email: data.emailAddresses[0].emailAddress });

        if (user?.clerkuserid) {
            res.status(400).json({ error: "User already exists" }); // ✅ Return response without returning from function
            return;
        }

        // Hash password
        // const hashedPassword = await bcrypt.hash(data.password, 10);

        // Create new user
        const newUser = new User.User({
            clerkuserid: data.id,
            firstname: data.firstName,
            lastname: data.lastName,
            username: data.username,
            email: data.emailAddresses[0].emailAddress,
            // password: hashedPassword,
        });
        console.log(newUser)


        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error: any) {
        console.log(error)
        res.status(500).json({ error: error.message || "Error signing up" });
    }
};



// // User Sign-in
// export const signIn = async (req: Request, res: Response) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user || !(await bcrypt.compare(password, user.password))) {
//             return res.status(400).json({ error: "Invalid credentials" });
//         }
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });
//         res.json({ token, user });
//     } catch (error) {
//         res.status(500).json({ error: "Error signing in" });
//     }
// };

// // Update Password
// export const updatePassword = async (req: Request, res: Response) => {
//     try {
//         const { userId, oldPassword, newPassword } = req.body;
//         const user = await User.findById(userId);
//         if (!user || !(await bcrypt.compare(oldPassword, user.password))) {
//             return res.status(400).json({ error: "Invalid old password" });
//         }
//         user.password = await bcrypt.hash(newPassword, 10);
//         await user.save();
//         res.json({ message: "Password updated successfully" });
//     } catch (error) {
//         res.status(500).json({ error: "Error updating password" });
//     }
// };

// // Change Username
// export const changeUsername = async (req: Request, res: Response) => {
//     try {
//         const { userId, newUsername } = req.body;
//         const user = await User.findByIdAndUpdate(userId, { username: newUsername }, { new: true });
//         res.json({ message: "Username updated successfully", user });
//     } catch (error) {
//         res.status(500).json({ error: "Error updating username" });
//     }
// };

// // Update Friends List
// export const updateFriends = async (req: Request, res: Response) => {
//     try {
//         const { userId, friendId, action } = req.body; // action: "add" or "remove"
//         const user = await User.findById(userId);
//         if (!user) return res.status(404).json({ error: "User not found" });

//         if (action === "add") {
//             if (!user.friends.includes(friendId)) user.friends.push(friendId);
//         } else if (action === "remove") {
//             user.friends = user.friends.filter((id) => id.toString() !== friendId);
//         }

//         await user.save();
//         res.json({ message: "Friend list updated", friends: user.friends });
//     } catch (error) {
//         res.status(500).json({ error: "Error updating friends" });
//     }
// };

// // Update User Code
// export const updateCode = async (req: Request, res: Response) => {
//     try {
//         const { userId, code } = req.body;
//         const user = await User.findByIdAndUpdate(userId, { code }, { new: true });
//         res.json({ message: "Code updated successfully", user });
//     } catch (error) {
//         res.status(500).json({ error: "Error updating code" });
//     }
// };
