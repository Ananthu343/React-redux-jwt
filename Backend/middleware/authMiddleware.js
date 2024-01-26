import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import dotenv from 'dotenv';
dotenv.config();
const key = process.env.JWT_SECRET_KEY;

const protect = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if (token) {
            try {
                const decoded = jwt.verify(token,`${key}`);
                req.user = await User.findById(decoded.userId).select("-password");
                next();
            } catch (error) {
                console.log(error.message);
                res.status(401);
                throw new Error("Not authorized, token failed");
            }
        } else {
            res.status(401);
            throw new Error("Not authorized, no token");
        }
    } catch (error) {
        console.log(error.message);
    }
}

export {protect}