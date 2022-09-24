import express from "express";
import User from "../models/User";

const router = express.Router();

router.post('/register',async (req,res)=>{
    const { email,password,name } = req.body

    try {
        if(User.findOne({email})){
            return res.status(400).send({error : "User already exists "});
        }
        const user = User.create({email,password,name});

        return res.send(user);
    } catch (error) {
        return res.status(400).send({ error: "Registration failed" });
    }
})

export default app => app.user('/auth',router)