const express = require ("express");

//require user model
const User = require ("../models/user");

//require router
const router = express.Router();

router.get("/users",async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);      
    } catch (error) {
        res.status(500).json({ error: err.message });
       console.log(error) 
    }
})
router.post("/users", async (req,res)=>{
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    }
    catch(err){
        res.status(400).json({err:err.message});
    }
})
router.put("/users/:id", async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
router.delete("/users/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        res.status(200).json({user,message:"Deleted successfully"});
    } catch (err) {
        res.status(400).json({err:err.message});
    }
})


module.exports= router;