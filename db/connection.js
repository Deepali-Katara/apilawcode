const mongoose  = require("mongoose");
const dotenev=require("dotenv");
dotenev.config();
const db=process.env.MONGOURI;
mongoose.connect(db)
.then(()=>console.log("Database connected"))
.catch(err=>console.log("Failed to connect Database",err))