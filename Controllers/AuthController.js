const  express = require("express")
const { isValidemail, ispassword } = require("../utils/Validation");
   const jwt = require("jsonwebtoken");
const USerSchema=require("../models/AuthSChema");
const { generateToken } = require("../utils/token");
// ...............reasistration part ..........//
const singup = async (req, res) => {
  try {
      const { fullname, email, password } = req.body;
    if (!fullname) return res.send("Your full name is required");
    if (!email) return res.send("Your email is required");
    if (!isValidemail(email)) return res.send("Enter a valid email");
    if (!password) return res.send("Your password is required");
    if (!ispassword(password)) return res.send("Enter a strong password");
// .......finfding the exist dta in db...//
    const existingUser = await USerSchema.findOne({ email });
    if (existingUser)return res.status(400).send("An account with this email already exists");
    const newUser = new USerSchema({
      fullname,
      email,
      password,
    });

    newUser.save();

    res.status(201).send({ message: "Registration successful" });

  } catch (error) {
   res.status(500).send({message:"Server error"})
    
  }
};

// ,...............login part .................//
const singin = async (req,res)=>{
 const {email,password} =req.body;
    try {
    if (!email) return res.send("Your email is required");
    if (!isValidemail(email)) return res.send("Enter a valid email");
    if (!password) return res.send("Your password is required");
    if (!ispassword(password)) return res.send("Enter a strong password");
    const existingUser = await USerSchema.findOne({ email });
    if (!existingUser) return res.status(400).send("user not found");
    // ..............compire user which is exit in db......//
     const isMatch = await existingUser.comparePassword(password);
     if(!isMatch) return res.status(404).send({message:"Invalid user"})
      
      // .......Token part...//
      const token=generateToken({id:existingUser._id,email:existingUser.email})
      // ...........set the token in cookie......//
                 res.cookie("Acc_token",token)
      res.status(200).send({message:" Login is successful"})

    } catch (error) {
       res.status(500).send({message:"Internal error Boss"})
    }
  
}

module.exports={singup,singin}