const requireAuth=require("./Middleware/requireAuth");
const express =require("express")
const cors=require("cors");
const dotenv=require("dotenv");
dotenv.config();

require("./db/connection")
const port=process.env.port||4000;
const app=express();
app.use(cors())
app.use(express.json())
app.use(require("./Routes/user.routes"));
app.get("/",requireAuth,(req,res)=>{
    res.send({msg:"Server is running",data:req.user})
// console.log("app is working")
})
app.listen(process.env.PORT,()=>{
    console.log("App is running on ",process.env.HOST_URL)
})
