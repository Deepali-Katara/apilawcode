const jwt =require("jsonwebtoken");
const User=require("../Models/UserSchema");
const dotenv= require("dotenv");

dotenv.config();
const jwtsecret=process.env.JWTSECRET;

module.exports=async(req,res,next)=>{
    const {authorization}=req.headers;
    console.log("authorization",authorization)
    if(!authorization){
        return res.status(401).send({error:"you must be logged in"})
    }
    const token=authorization.split(" ")[1];
    jwt.verify(token,jwtsecret,async(err,payload)=>{
        if(err){
            return res.status(401).send({error:"you must be logged in 2",err:err})

        }
        console.log(payload);
        const {email}=payload;
        const user= await User.findOne({EmailId:email});
        req.user=user;
        next();
    })
}