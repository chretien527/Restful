import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", async(req,res) => {
    try{
        const { name, email, password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                message:'User already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 20);

        const user = await User.create({
            name,
            email,
            password:hashedPassword,
        });

        return res.status(201).json({
            message:"User created successfully",
        });
    }catch(error){
        res.status(500).json({
            message:"Inter server error"
        });
    }
});

export default router;