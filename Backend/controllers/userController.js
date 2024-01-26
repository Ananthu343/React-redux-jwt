import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const userController = {
    registerUser : async(req,res)=>{
        try {
            const {name,email,password} = req.body;
            const userExists = await User.findOne({email});
            if (userExists) {
               res.status(401).send({ error: "Invalid credentials" });
               throw new Error("user already exists");
            }

            const user = await User.create({
                name,
                email,
                password
            })

            if (user) {
                generateToken(res,user._id);
                res.status(201).json({
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    image:user.image
                })
            } else {
                res.status(400);
                throw new Error ("invalid user Data")
            }
        } catch (error) {
            console.log(error.message);
        }
    },
    logout: async (req,res)=>{
        try {
            res.cookie("jwt", "", {
                httpOnly: true,
                expires: new Date(0),
              });
              res.status(200).json({ message: "Logged out successfully" });
        } catch (error) {
            console.log(error.message);
        }
    },
    login: async (req,res)=>{
        try {
            const {email,password} = req.body;
            const user = await User.findOne({email});
            if (user && (await user.matchPassword(password))) {
                generateToken(res, user._id);
                res.json({
                  _id: user._id,
                  name: user.name,
                  email: user.email,
                  image: user.imageURL,
                  isAdmin: user.isAdmin,
                });
              } else {
                throw new Error("Invalid email or password");
              }
        } catch (error) {
            res.status(401).send({ error: "Invalid credentials" });
            console.log(error.message);
        }
    },
    getUserProfile: async (req, res) => {
        try {
          if (req.user) {
            res.json({
              _id: req.user._id,
              name: req.user.name,
              email: req.user.email,
              image: req.user.image,
            });
          } else {
            res.status(404);
            throw new Error("User not found");
          }
        } catch (error) {
          console.log(error);
        }
      },
      updateUserProfile: async(req,res)=>{
        
      }
}

export {userController};