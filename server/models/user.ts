// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//     code: { type: String, default: "" }
// }, { timestamps: true });

// const User = mongoose.model("User", UserSchema);
// export default User;


// first i will tell what my user is going to have so lets start 
// first user will give his fullname, username, password, number of frinds, total codewords count, all projects, total projects numebr active days counts 

import mongoose from "mongoose";
import { date } from "zod";
const projectschema=new mongoose.Schema({
    code1:{
        type:String,

    },
    code2:{
        type:String,
    },
    user1:{
        type: String,
    }
    , 
    user2:{
        type:String,
    },
    lastupdate:{
        type:Date
    }
})


const userschema=new mongoose.Schema({
    clerkuserid: { type: String, unique: true, required: true },
    firstname: {
        type:String,
        required:true,
        
    },
    lastname:{
        type:String,
        required:true,
    },
    joindate:{
        type:Date,
        default:Date.now,
        required:true,
    },
    numberoffriends:{
        type:Number,
        default:0,
        required:true,
    }
    ,
    username:{
        type:String,
        unique:true,
        required:true,
    },
    // password:{
    //     type:String,
    //     required:true,
    //     minlength:5,
    // },
    email:{
        type:String,
        required:true,
    },
    projects: {
        type: [projectschema], // Array of projects
        default: []
    }

}, { timestamps: true })
const User = mongoose.model("User", userschema);
const Project = mongoose.model("Project", projectschema);
export default { User, Project };